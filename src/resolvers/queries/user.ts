import { Post, Profile, User } from "@prisma/client";
import dbClient from "../../db.config";
import { IContext } from "../../interface";

interface IProfilePayload extends Profile {
    isMyProfile: boolean;
}

async function me(
    parent: any,
    args: any,
    context: IContext
): Promise<IProfilePayload | null> {
    const { dbClient, userInfo } = context;

    if (!userInfo) return null;

    const profile = await dbClient.profile.findUnique({
        where: { userId: userInfo.userId },
    });

    if (!profile) return null;

    return { ...profile, isMyProfile: true };
}

async function profile(
    parent: any,
    args: { userId: string },
    context: IContext
): Promise<IProfilePayload | null> {
    const { dbClient, userInfo } = context;
    const { userId } = args;

    let isMyProfile = userInfo?.userId === Number(userId);

    const userProfile = await dbClient.profile.findUnique({
        where: { userId: Number(userId) },
    });

    if (!userProfile) return null;

    return { ...userProfile, isMyProfile };
}

interface IUserParent {
    id: number;
    bio: string;
    userId: number;
}

async function getUserFromProfile(
    parent: IUserParent,
    args: any,
    context: IContext
): Promise<User | null> {
    const { userId } = parent;

    return await dbClient.user.findUnique({ where: { id: userId } });
}

async function getPostsFromUser(
    parent: { id: number },
    args: { take: number; skip: number },
    context: IContext
): Promise<Post[]> {
    const { userInfo, dbClient } = context;
    const { id } = parent;
    const { take, skip } = args;

    if (userInfo?.userId === id) {
        return await dbClient.post.findMany({
            where: { authorId: id },
            orderBy: [{ createdAt: "desc" }],
            skip,
            take,
        });
    }

    return await dbClient.post.findMany({
        where: { authorId: id, published: true },
        orderBy: [{ createdAt: "desc" }],
        skip,
        take,
    });
}

async function getPostsFromProfile(
    parent: { userId: number },
    args: { take: number; skip: number },
    context: IContext
): Promise<Post[]> {
    const { userInfo, dbClient } = context;
    const { userId } = parent;
    const { take, skip } = args;

    if (userInfo?.userId === Number(userId)) {
        return await dbClient.post.findMany({
            where: { authorId: Number(userId) },
            orderBy: [{ createdAt: "desc" }],
            skip,
            take,
        });
    }

    return await dbClient.post.findMany({
        where: { authorId: Number(userId), published: true },
        orderBy: [{ createdAt: "desc" }],
        skip,
        take,
    });
}

export {
    me,
    profile,
    getUserFromProfile,
    getPostsFromProfile,
    getPostsFromUser,
};
