import React from "react";
class CMultiplication extends React.Component{
    render(){
    let a=5;
    let b=7;
    let sum=a*b;
    return(
        <div style={{textalign:"center",marginTop:"50px"}}>
        <h2> Simple Multiplication</h2>
        <p>{a}*{b}={sum}</p>
        </div>
    );
}
}
export default CMultiplication;