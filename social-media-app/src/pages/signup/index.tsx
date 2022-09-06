import { gql, useMutation } from '@apollo/client';
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/button'
import TextInput from '../../components/TextInput/text-input'
import { ISignUpResponse, MutationVariable } from './interfaces';
import { SIGNUP_ACTION } from './queries';



function SignUp() {
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<{ [key: string]: string }>({
    email:"",
    password:"",
    name:"",
    bio:""
  });

  const navigate = useNavigate();
  const [postSignUp, { loading, data }] = useMutation<
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
  }, [data, navigate]);

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
      <Button onClick={() => null} disabled={loading}>{loading ? "Loading..." : "Sign Up"}</Button>
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
