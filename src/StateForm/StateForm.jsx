import React, { useState } from 'react';

const StateForm = () => {
const [name,setName]=useState("")
const [mail,setMail]=useState(null)
const[password,setPassword]=useState()
const [error,setError]=useState('')

    const handleOnClick=(e)=>{
        e.preventDefault();
        if(password.length<5){
            setError('password need more')
        }else{
            setError('')
        }
            console.log(name,mail,password);
    }

    const handleName=e=>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmail=e=>{
        console.log(e.target.value);
        setMail(e.target.value)
    }
    const handlePass=e=>{
        console.log(e.target.value);
        setPassword(e.target.value) 
    }
    return (
        <div>
                 
        <h3>State useable Form</h3>

<form onSubmit={handleOnClick} >
    <input onChange={handleName} type="text" name="name" /><br />
    <input onChange={handleEmail} type="text" name="email" /> <br />
    <input onChange={handlePass} type="password" name="password" id="" required />
    {error && <p>{error}</p>}
    <input type="submit" value="submit" /> <br />
</form>

        </div>
    );
};

export default StateForm;