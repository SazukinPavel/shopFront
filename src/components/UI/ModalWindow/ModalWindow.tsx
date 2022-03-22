import {FC, HTMLProps, MouseEventHandler, useRef } from 'react';
import styles from './ModalWindow.module.scss' 

interface ModalWindowProps{
    onClose:()=>void
}

const ModalWindow:FC<HTMLProps<HTMLDivElement> & ModalWindowProps>=({className,onClose,children,...props})=> {
    
    const modelBackGround=useRef<HTMLDivElement>(null)

    const onDivClick:MouseEventHandler=(e)=>{
        if(e.target===modelBackGround.current){
            onClose()
        }
    }
    
    return ( 
        <div ref={modelBackGround} onClick={onDivClick} className={`${styles.ModalWindow} ${className}`} {...props} >
            <div className={styles.ModalContent}>
                <span onClick={onClose}>X</span>
                {children}
            </div>
        </div>
     );
}

export default ModalWindow;