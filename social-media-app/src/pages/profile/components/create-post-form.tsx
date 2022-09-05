import React, { FormEvent, useRef } from "react";
import Button from "../../../components/Button/button";
import TextInput from "../../../components/TextInput/text-input";

function CreatePostForm() {
  const formRef = useRef<{ [key: string]: string }>({
    title: "",
    content: "",
  });

  const onHandleInput = (name: string, value: string) => {
    formRef.current[name] = value;
  };

  const onSubmit = (e:FormEvent) => { 
    e.preventDefault();
  };

  return (
    <form>
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
      <div className="my-2">
        <Button onClick={() => null}>Create Post</Button>
      </div>
    </form>
  );
}

export default CreatePostForm;
