import { useState } from "react"

const useHook3=(hello)=>{
    const[value,seValue]=useState(hello)
    const onChange=(e)=>{
        seValue(e.target.value)
    }
    return {
        value,onChange
    }

}
export default useHook3