import React,{useState} from "react";
const RegForm=()=>{
    const [StudentName,setStudentName]=useState("");
    const [RollNo,setRollNo]=useState("");
    const [Gender,setGender]=useState("");
    const [State,setState]=useState("");
    const handleSUBMIT =(event)=>{
        event.preventDefault();
        alert('Registration successful');
        setStudentName('');
        setRollNo("");
        setGender('');
        setState('');
    };
    return(
        <div style={{maxWidth:'400px',margin:'auto',padding:'20px',border:'5px solid yellow'}}>
            <form onSubmit={handleSUBMIT}>
                <div>
                    <label>
                        Student Name:<input type="text" value={StudentName} onChange={(e)=>setStudentName(e.target.value)} required/>
                    </label>
                </div>
                <div>
                    <label>
                        Roll No:<input type="text" value={RollNo} onChange={(e)=>setRollNo(e.target.value)} required/>
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <input type="radio" name='gender' value='male' checked={Gender === 'male'}
                                onChange={(e)=>setGender(e.target.value)} /> Male
                        <input type="radio" name='gender' value='female' checked={Gender === 'female'}
                                onChange={(e)=>setGender(e.target.value)} /> Female
                    </label>
                </div>
                  <label htmlFor="state">State:</label>
            <select id="state" name="state" value={State} onChange={(e)=>setState(e.target.value)} required>
                <option value="" disabled selected>Select State</option>
                <option value="telangana">Telangana</option>
                <option value="andhra pradesh">Andhra Pradesh</option>
            </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegForm;
