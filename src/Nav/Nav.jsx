import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css"

const Nav = () => {
    return (
        <div style={{textAlign:"center"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="form1">General Form</NavLink>
            <NavLink to="form2" >State Form</NavLink>
            <NavLink to="form3">Uncontrolled Form</NavLink>
            <NavLink to="form4">Custom Hook</NavLink>
            <NavLink to="form5">Custom Hook-2</NavLink>
            <NavLink to="form6">Show Reuse props</NavLink>
        </div>
    );
};

export default Nav;