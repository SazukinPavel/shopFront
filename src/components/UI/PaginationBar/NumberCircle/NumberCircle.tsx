import { FC, HTMLProps } from "react";

const NumberCircle:FC<HTMLProps<HTMLSpanElement>>=({children,...props})=> {
    return ( 
        <span {...props}>{children}</span>
     );
}

export default NumberCircle;