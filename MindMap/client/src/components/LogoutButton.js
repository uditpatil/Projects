import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LogoutButton = props =>{
    const navigate = useNavigate()
    const logout = () =>{
        axios.post("http://localhost:8000/api/logout", {}, {withCredentials: true})
        .then((res) => {
            console.log(res);
            navigate("/")
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <button class="btn btn-warning" onClick={logout}>Logout</button>
        </div>
    )
}

export default LogoutButton