import {useQuery} from "@apollo/client"
import { useState } from "react"
import Post from "./components/post"
import { IPostData, IPosts, QueryInput } from "./interfaces"
import { GET_POST } from "./queries"

import styles from "./style.module.css"

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
