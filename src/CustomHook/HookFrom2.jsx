import React from 'react';
import useCustomHook2 from './CustomHook2';
import useHook3 from './customHook3';

const HookFrom2 = () => {

    const [name,handleName]=useCustomHook2('type your name')
    const setEmail=useHook3('')
   
    
const handleOnSubmit=e=>{
    e.preventDefault()
    console.log(name);
    console.log(setEmail.value);
}

    return (
        <div>
            <form onSubmit={handleOnSubmit} >
                <input value={name} onChange={handleName} type="text" name='name' />
                <input {...setEmail} type="email" name='email' />
                <input type="password" name='password' />
                <input type="submit"/>
            </form>
        </div>
    );  
};

export default HookFrom2;