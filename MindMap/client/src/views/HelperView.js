import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import HelperForm from '../components/HelperFrom';
import { useNavigate } from 'react-router-dom';
import appImage from "../assets/FirstPage.png"
const HelperView = props =>{
    const navigate = useNavigate();
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/helpers", data)
            .then((res) =>{
                navigate("/mindmap/doctorsAndTherapiest")
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
            <HelperForm onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default HelperView;