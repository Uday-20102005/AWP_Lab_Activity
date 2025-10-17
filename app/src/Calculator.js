import React,{useState} from "react";
const Calculator=()=>{
    const[input1,setInput1]=useState('');
    const[input2,setInput2]=useState('');
    const[result,setResult]=useState(null);

    const Addition=()=>{
        setResult(parseFloat(input1)+parseFloat(input2));
    }
    const Subtraction=()=>{
        setResult(parseFloat(input1)-parseFloat(input2));
    }
    const Multiplication=()=>{
        setResult(parseFloat(input1)*parseFloat(input2));
    }
    const Division=()=>{
        setResult(parseFloat(input1)/parseFloat(input2));
    }

    return(
        <div style={{maxWidth:'400px',margin:'auto',padding:'20px',border:'3px solid yellow'}}>
            <h2>Basic Arithmetic calculator</h2>
            <div>
                <input type="number" value={input1} onChange={(e)=>setInput1(e.target.value)}
                placeholder="First Number" required/>
            </div>
            <div>
                <input type="number" value={input2} onChange={(e)=>setInput2(e.target.value)}
                placeholder="Second Number" required/>
            </div>
            <div>
                <button onClick={Addition}>+</button>
                <button onClick={Subtraction}>-</button>
                <button onClick={Multiplication}>*</button>
                <button onClick={Division}>/</button>
            </div>
            <div>
                <h3>Result:{result}</h3>
            </div>
        </div>
    );
};

export default Calculator;