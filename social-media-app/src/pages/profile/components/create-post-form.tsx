import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "../../../components/Button/button";
import TextInput from "../../../components/TextInput/text-input";

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

const CREATE_POST = gql`
 mutation createPost($input:PostInput!){
  postCreate(input:$input) {
    errors{
      message
    }
    post{
      id
    }
  }
 }
`;


function CreatePostForm({loadProfile, closeModal}:{loadProfile:() => void, closeModal:() => void}) {
  console.log("Rendered")
  const formRef = useRef<{ [key: string]: string }>({
    title: "",
    content: "",
  });

  const [formError,setFormError] = useState<string | null>(null);
  const [postCreate,{data,loading,error}] = useMutation<ICreatePostResponse,IQueryVars>(CREATE_POST);

  useEffect(() => {

    if(data) {
       if(data.postCreate.errors.length){
         setFormError(data.postCreate.errors[0].message);
       }
       
       if(data.postCreate.post?.id) {
         setFormError(null);
         closeModal();
       }
    }

  },[data])

  const onHandleInput = (name: string, value: string) => {
    formRef.current[name] = value;
  };

  const onSubmit = (e:FormEvent) => { 
    e.preventDefault();
    const {title,content} = formRef.current;
    postCreate({variables:{input:{title,content}}, onCompleted : () => {loadProfile();}});
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-2">
        <TextInput
          initialValue=""
          name="title"
          placeholder="Add your post title"
          onHandleInput={onHandleInput}
        ></TextInput>
      </div>
      <div className="my-2">
        <TextInput
          initialValue=""
          name="content"
          placeholder="Add your post content"
          onHandleInput={onHandleInput}
        ></TextInput>
      </div>
      {formError && <p style={{color:"red"}}>{formError}</p>}
      <div className="my-2">
        <Button onClick={() => null} disabled={loading}>{loading ? "Loading...":"Create Post"}</Button> 
      </div>
    </form>
  );
}

export default CreatePostForm;
