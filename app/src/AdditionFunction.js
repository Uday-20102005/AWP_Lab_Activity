import React from "react";
function Addition(){
    let a=5;
    let b=7;
    let sum=a+b;
    return(                                                                                        
        <div style={{textalign:"center",marginTop:"50px"}}>
        <h2> Simple Addition</h2>
        <p>{a}+{b}={sum}</p>
        </div>
    );
}
export default Addition;