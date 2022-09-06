import React, { ReactNode } from 'react'
import {createPortal} from "react-dom"
import Button from '../Button/button';
import styles from "./style.module.css";

interface IProps {
  showModal:boolean
  onClose : () => void
  children: ReactNode
  title:string
}

const ROOT = document.getElementById("root");

function Modal({showModal, onClose, children, title}:IProps) {
  if(!showModal)
    return null;

  if(ROOT)
    return createPortal(
      <div className={styles["modal-wrap"]}>
          <div className={styles["modal-bg"]}></div>
          <div className={styles["modal"]}>
             <div className={styles["modal-header"]}>
              <h3>{title}</h3>
              <Button onClick={onClose}>Close</Button>
             </div>
             <div className={styles["modal-body"]}>
              {children}
             </div>
          </div>
      </div>
      ,ROOT)

    else
      return null;
  
}

export default Modal
