import React from 'react';
import {useNavigate } from 'react-router-dom';
import firstPage from "../assets/AdobeStock_387753011.mov"
const FirstView = props => {
    const navigate = useNavigate()
    const loginHandler = (e) =>{
        e.preventDefault()
        navigate('/mindmap/login')
    }
    return(
        
        <div className="firstPageClass">
            <video src={firstPage} autoPlay loop muted></video>
            <div className="firstPageContent">
                    <h1 className="titleFirst">MindMap</h1>
                    <div class="d-flex justify-content-around">
                        <p class="text-light">Don't have an account, sign up!  </p>
                        <button class="btn btn-outline-light"onClick={loginHandler}>Sign Up</button>
                    </div>
                    <br/>
                    <br/>
                    <div class="d-flex justify-content-around"> 
                        <p class="text-light text-center">Already have an account  </p>
                        <button class="btn btn-outline-light" onClick={loginHandler}>Sign In</button>
                    </div>
            </div>
        </div>
    )
}

export default FirstView;