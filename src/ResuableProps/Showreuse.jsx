import React from 'react';
import ReuseableProps from './reuseableProps';
const handle=(data)=>{
console.log(data);
}


const Showreuse = () => {
    return (
        <div>
            <ReuseableProps title={"Yes Form---1"}handle={handle} buttonText={"post"}></ReuseableProps>


            <ReuseableProps title={"Yes Form---2"} handle={handle}  buttonText={"logIn"} >
            <div>
                <h2>sign up</h2>
                <h5>If you want</h5>
            </div>
            </ReuseableProps>
        </div>
    );
};

export default Showreuse;