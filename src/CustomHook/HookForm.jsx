import React from 'react';
import useStateFunc from './CustomHook';

const HookForm = () => {
    const [name,handleName]=useStateFunc('');
    const [email,handleEmail]=useStateFunc('')

    
    const handleOnClick=(e)=>{
        console.log(name,email);
        e.preventDefault()
    }

    return (
        <div>


<form onSubmit={handleOnClick} >
            <input value={name} onChange={handleName} type="text" name="name" /><br />
            <input value={email} onChange={handleEmail} type="text" name="email" /> <br />
            <input type="submit" value="submit" /> <br />
        </form>
        </div>
    );
};

export default HookForm;