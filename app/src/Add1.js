import React,{useState} from "react";
function Add1(){
    let a=10;
    let b=20;
    const [Result,setResult]=useState(0);
    return(
        <div>
            <p>Addition is {Result}</p>
            <button onClick={()=>setResult(a+b)}>click me for addition</button>
        </div>
    )
}
export default Add1;