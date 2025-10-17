import React,{useState} from "react";
function Events(){
    const[dateTime,setDateTime]=useState('');
    const[message,setMessage]=useState('');
    function handleDateTimeClick(){
        const currentDate=new Date();
        setDateTime(currentDate.toString());
    }
    function handleGoodybyeClick(){
        setMessage('Good Bye');
    };
    return(<div>
        <h1>Event listener examples</h1>
        <button onClick={handleDateTimeClick}>show Date</button><br></br>
        <button onClick={handleGoodybyeClick}>Show goodbye</button><br></br>
        <h2>{dateTime}</h2>
        <h2>{message}</h2>
    </div>);
}
export default Events;