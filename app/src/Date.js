import React from "react";
function DateTime(){
    const now=new Date().toLocaleString();
    return(<h1>{now}</h1>)
}
export default DateTime;