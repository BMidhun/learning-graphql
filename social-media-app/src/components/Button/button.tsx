import React, { ReactNode } from 'react'
import styles from "./style.module.css"

interface IProps {
    onClick : () => void
    children: ReactNode
    disabled?:boolean
}

function Button({onClick,children, disabled}:IProps) {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button
