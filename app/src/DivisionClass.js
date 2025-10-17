import React from "react";
class CDivision extends React.Component{
    render(){
    let a=50;
    let b=5;
    let sum=a/b;
    return(
        <div style={{textalign:"center",marginTop:"50px"}}>
        <h2> Simple Division</h2>
        <p>{a}/{b}={sum}</p>
        </div>
    );
}
}
export default CDivision;