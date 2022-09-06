
interface IPostData {
    id:number
    title:string
    content:string
    createdAt:string
    author:{
      name:string
    }
  }
  
  interface IPosts {
    posts: IPostData[]
  }
  
  interface QueryInput {
    skip:number,
    take:number
  }

export type {IPostData,IPosts,QueryInput}