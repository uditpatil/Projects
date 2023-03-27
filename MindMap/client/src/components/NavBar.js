import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const NavBar = props =>{
    return(
        <nav class="navbar justify-content-center">
            <div class="col">
                <Link class="nav-item text-light text-decoration-none" to="/mindmap/home">Home</Link>
            </div>
            <div class="col">
                <Link class="nav-item text-light text-decoration-none" to="/mindmap/doctorsAndTherapiest">Doctor/Therapist</Link> 
            </div>
            <div class="col">
                <Link class="nav-item text-light text-decoration-none" to="/mindmap/patient">New Note</Link>
            </div> 
            <div class="col">
                <Link class="nav-item text-light text-decoration-none" to="/mindmap/helperAI">Talk to me</Link>
            </div>
            <LogoutButton class="btn btn-warning"/>
            </nav>
    )
}

export default NavBar;