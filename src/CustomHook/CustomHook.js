import { useState } from "react"

 const useStateFunc=(defaultValue)=>{
const [value,setValue]=useState("")
const   handleChange=e=>{
    setValue(e.target.value)
}
return [value,handleChange]
 }
 export default useStateFunc