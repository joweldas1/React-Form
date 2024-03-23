import React, { useEffect, useRef } from 'react';

const ReuseableProps = ({title,handle,buttonText,children}) => {
    // const handleOnClick=(e)=>{
    //     e.preventDefault()
    // }
    const nameOf=useRef()

    useEffect(()=>{
        nameOf.current.focus(   )
    },[])

    const handleClick=(e)=>{
        e.preventDefault()
        
        const data={
            name:e.target.name.value,
            email:e.target.email.value
        }
        
        handle(data)
    }
    return (
        <div>
               
        {children}

<form onSubmit={handleClick} >
    <input ref={nameOf} type="text" name="name" /><br />
    <input type="text" name="email" /> <br />
    <input type="submit" value={buttonText} /> <br />
</form>
        </div>
    );
};

export default ReuseableProps;