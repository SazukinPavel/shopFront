import { ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.scss'

interface ButtonProps{
    styleType:'warn' | 'sucess' | 'primary'
}

const Button:FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = ({children,styleType,...props})=>{
    
    const classes=styles.Button+' '+styles[styleType]

    return ( 
        <button className={classes} {...props}>{children}</button>
     );
}

export default Button;