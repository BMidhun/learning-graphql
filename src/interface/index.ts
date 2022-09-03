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

interface ISignUpArgs {
  email:string
  password:string
  bio:string
  name:string
}

interface IPostPayloadResponse {
  errors: { message: string }[];
  post: Post | null;
}

interface ISignUpPayloadResponse {
  errors: { message: string }[];
  token: string | null;
}

export { IContext, ICreateUpdatePostArgs, IPostPayloadResponse, postUpdateArgs, ISignUpArgs, ISignUpPayloadResponse};
