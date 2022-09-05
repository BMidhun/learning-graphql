import React, { ReactNode } from 'react'
import styles from "./style.module.css"

interface IProps {
    onClick : () => void
    children: ReactNode
}

function Button({onClick,children}:IProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
