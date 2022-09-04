import {gql, useQuery} from "@apollo/client"
import { useState } from "react"

interface PostData {
  id:number
  title:string
  content:string
  createdAt:string
  author:{
    name:string
  }
}

interface QueryInput {
  skip:number,
  take:number
}

const GET_POST = gql`
  query($take:Int!, $skip:Int!){
    posts(take: $take, skip:$skip){
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

 const {data,loading,error} = useQuery<PostData, QueryInput>(GET_POST,{variables:{skip, take:TAKE}});

 console.log({data, loading, error})
 
 if(loading)
    return <div>Loading....</div>

  if(error)
    return <div>{JSON.stringify(error)}</div>

  return <div>Post</div>
  
}

export default Posts
