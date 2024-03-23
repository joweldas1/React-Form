import { useState } from "react"

const useCustomHook2=(defaultValue)=>{
    const[value,setValue]=useState(defaultValue)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    return [value,handleChange]

}   
export default useCustomHook2