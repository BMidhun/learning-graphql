import { gql, useMutation } from '@apollo/client';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/button'
import TextInput from '../../components/TextInput/text-input'

interface ISignUpData {
  errors: { message: string }[];
  token: string;
}

interface MutationVariable {
  credentials: {
    email: string;
    password: string;
  };
  bio:string,
  name:string
}

interface ISignUpResponse {
  signUp: ISignUpData;
}

const SIGNUP_ACTION = gql`
 mutation signUp($credentials: CredentialInput!, $name: String!, $bio: String!) {
  signUp(credentials: $credentials, name: $name, bio: $bio) {
      errors{
        message
      }
      token
  }
 }
`;

function SignUp() {
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<{ [key: string]: string }>({
    email:"",
    password:"",
    name:"",
    bio:""
  });

  const navigate = useNavigate();
  const [postSignUp, { loading, data, error }] = useMutation<
  ISignUpResponse,
    MutationVariable
  >(SIGNUP_ACTION);

  function onHandleInput(name:string,value:string) {
    formRef.current[name] = value;
  }

  function onSubmit (e:FormEvent) {
    e.preventDefault();
    const {email,password,name,bio} = formRef.current
    postSignUp({variables:{credentials:{email, password}, bio, name}});
  }

  useEffect(() => {
    if (data) {
      if (data.signUp.errors.length) {
        setFormError(data.signUp.errors[0].message);
      }

      if (data.signUp.token) {
        setFormError(null);
        localStorage.setItem("token", data.signUp.token);
        navigate("/posts",{replace:true});
      }
    }
  }, [data]);

  return (
    <form onSubmit={onSubmit}>
    <div className='my-2'>
       <TextInput name='email' initialValue='' placeholder='Email address' onHandleInput={ onHandleInput} type="email" required={true}/>
    </div>
    <div className='my-2'>
       <TextInput name='password' initialValue='' placeholder='Password' onHandleInput={ onHandleInput} type="password" required={true}/>
    </div>
    <div className='my-2'>
       <TextInput name='name' initialValue='' placeholder='Username' onHandleInput={ onHandleInput} required={true}/>
    </div>
    <div className='my-2'>
       <TextInput name='bio' initialValue='' placeholder='Enter your bio' onHandleInput={ onHandleInput}  required={true}/>
    </div>
    <div className='my-2'>
      <Button onClick={() => null}>Sign Up</Button>
    </div>
    {formError ? (
        <p className="my-2" style={{ color: "red" }}>
          {formError}
        </p>
      ) : null}
</form>
  )
}

export default SignUp
