import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = props =>{
    const navigate = useNavigate()
    const[userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const onChangeHandler = (e) =>{
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", userReg, {withCredentials:true})
        .then((res) => {
            console.log(res);
            navigate("/mindmap/welcome")
        })
        .catch(err =>{
            console.log(err);
        })
    }
        

    return(
        <div class="modal-body">
            <h4 class="text-center">Register</h4>
            <form class="px-4 py-3" onSubmit={submitHandler}>
                <div class="form-group">
                    <label>First Name:</label>
                    <input class="form-control" type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler} />
                </div>
                <div class="form-group">
                    <label>Last Name:</label>
                    <input class="form-control" type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler} />
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input class="form-control" type="text" name="email" value={userReg.email} onChange={onChangeHandler} />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input class="form-control" type="password" name="password" value={userReg.password} onChange={onChangeHandler} />
                </div>
                <div class="form-group">
                    <label>Confirm Password:</label>
                    <input class="form-control" type="password" name="confirmPassword" value={userReg.confirmPassword} onChange={onChangeHandler} />
                </div>
                <button class="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register