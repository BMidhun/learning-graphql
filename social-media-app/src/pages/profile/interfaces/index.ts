interface IProfileData {
    id: number;
    bio: string;
    isMyProfile:boolean
    user: {
      name: string;
    };
    posts: {
      id: number;
      title: string;
      content: string;
      createdAt: string;
      published:boolean
    }[];
  }
  
  interface IProfile {
    profile: IProfileData;
    me:IProfileData;
  }
  
  interface QueryVars {
    userId: string | undefined;
    skip: number;
    take: number;
  }

  interface IPostData{
    errors:{
      message:string
    }[];
    post:{
      id:number
    }
  }
  
  interface ICreatePostResponse{
    postCreate:IPostData;
  }
  
  interface IQueryVars {
    input:{
      title:string,
      content:string
    }
  }

export type {IProfileData, IProfile, QueryVars, ICreatePostResponse, IQueryVars, IPostData}