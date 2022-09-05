import React, { FormEvent, useRef } from 'react'
import Button from '../../components/Button/button'
import TextInput from '../../components/TextInput/text-input'

function SignUp() {
  const formRef = useRef<{ [key: string]: string }>({
    email:"",
    password:"",
    name:"",
    bio:""
  });

  function onHandleInput(name:string,value:string) {
    formRef.current[name] = value;
  }

  function onSubmit (e:FormEvent) {
    e.preventDefault();
    alert("Invoked");
  }

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
    <div>
      <Button onClick={() => null}>Sign Up</Button>
    </div>
</form>
  )
}

export default SignUp
