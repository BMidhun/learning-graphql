import {gql, useQuery} from "@apollo/client"
import { useState } from "react"
import Post from "./components/post"

import styles from "./style.module.css"

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

const GET_POST = gql`
  query($take:Int!, $skip:Int!){
    posts(take:$take, skip:$skip){
      id
      title
      content
      createdAt
      author{
        name
      }
    }
  }
`
const TAKE = 10;

function Posts() {

 const [skip,setSkip] = useState(0);

 const {data,loading,error} = useQuery<IPosts, QueryInput>(GET_POST,{variables:{skip, take:TAKE}});

 
 if(loading)
    return <div>Loading....</div>

  if(error)
    return <div>{JSON.stringify(error)}</div>

  return <div className={styles["post-wrapper"]}>
            <h2 className={styles["post-heading"]}>Posts</h2>
            <div className={styles["posts"]}>
                {data ? data.posts.map((_post: IPostData) => {
                   const {id,content,createdAt,title,author} = _post
                   return <Post id={id} content={content} createdAt={createdAt} title={title} username={author.name} key={id}/>
                }) : <div>No Posts found!</div>}
            </div>
        </div>
  
}

export default Posts
