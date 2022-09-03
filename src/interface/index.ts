import { Post, Prisma, PrismaClient } from "@prisma/client";

interface IContext {
  dbClient: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

interface ICreateUpdatePostArgs {
  input: { title: string; content: string };
}

interface postUpdateArgs extends ICreateUpdatePostArgs {
    postId: string
}

interface IPostPayloadResponse {
  errors: { message: string }[];
  post: Post | null;
}

export { IContext, ICreateUpdatePostArgs, IPostPayloadResponse, postUpdateArgs};
