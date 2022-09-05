import styles from "./style.module.css";

import React, { ChangeEvent, useState } from 'react'

interface ITextInput{
    name:string,
    initialValue:string
    onHandleInput: (name:string,value:string) => void
    placeholder:string
    type?:string
    required?:boolean
}


function TextInput({name,initialValue,onHandleInput, placeholder, type="text", required=false}:ITextInput) {

  const [value,setValue] = useState(initialValue);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    const name = e.target.name
    onHandleInput(name,data);
    setValue(data);
  }

  return <input type={type} name={name} value={value} onChange={onChange} className={styles["text-input"]} placeholder={placeholder} required={required}/>
}

export default TextInput
