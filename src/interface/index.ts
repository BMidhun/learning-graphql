import {Post, Prisma, PrismaClient} from "@prisma/client"


interface IContext {
    dbClient:PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}

interface ICreatePostArgs {
    title:string,
    content:string
}

interface ICreatePostResponse {
    errors: {message:string}[]
    post:Post | null
}

export {IContext, ICreatePostArgs, ICreatePostResponse}