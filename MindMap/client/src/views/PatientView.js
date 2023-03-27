import axios from 'axios';
import React from 'react';
import NavBar from '../components/NavBar';
import PatientForm from '../components/PatientForm';
import { useNavigate } from 'react-router-dom';
import appImage from "../assets/FirstPage.png"
const PatientView = props =>{
    const navigate = useNavigate();
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/notes", data)
            .then((res)=>{
                navigate("/mindmap/home");
            })
            .catch(err =>{
                console.log(err);
            })
    }
    return(
        <div style={{
            backgroundImage: `url(${appImage})`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <NavBar />
            <div class="container">
                <PatientForm onSubmitHandler={onSubmitHandler}/>
            </div>
        </div>
    )
}

export default PatientView;