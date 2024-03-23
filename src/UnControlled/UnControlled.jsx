import { useEffect, useRef } from "react";


const UnControlled = () => {
    const nameRef=useRef()
    const mailRef=useRef()
    const passRef=useRef()
    useEffect(()=>{
        nameRef.current.focus()
       
},[])

    const handleOnclick=e=>{
            e.preventDefault()
       
    }
    return (
        <div>
            <form onSubmit={handleOnclick} >
                <input defaultValue={'ki obostha'} ref={nameRef} type="text" name="name" /> <br />
                <input ref={mailRef} type="email" name="mail" /> <br />
                <input ref={passRef} type="password" name="password" /> <br />
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
};

export default UnControlled;