import React from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from "../assets/WelcomePage.png"
const WelcomeView = props => {
    const navigate = useNavigate()
    const doctorHandler = (e) =>{
        e.preventDefault()
        navigate('/mindmap/helper')
    }
    const therapiestHandler = (e) =>{
        e.preventDefault()
        navigate("/mindmap/helper")
    }

    const patientHandler = (e) =>{
        e.preventDefault()
        navigate("/mindmap/patient")
    }
    return(
            <div class="container" style={{
                backgroundImage: `url(${welcomeImage})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <h4 class="text-center">Welcome!</h4>
                <p class="text-center fs-3">Are you a doctor/therapiest or an indivisaual looking for help?</p>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-light" onClick={doctorHandler}>Doctor</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-light" onClick={therapiestHandler}>Therapist</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-light" onClick={patientHandler}>Patient</button>
                    </div>
                </div>
            </div>
    )
}

export default WelcomeView;