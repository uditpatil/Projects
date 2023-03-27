import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = props =>{
    const navigate = useNavigate()
    const[userLog, setUserReg] = useState({
        email:'',
        password:''
    })
    const onChangeHandler = (e) =>{
        setUserReg({...userLog, [e.target.name]: e.target.value})
    }
    const loginHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", userLog, {withCredentials:true})
        .then((res) => {
            console.log(res);
            navigate("/mindmap/welcome")
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div class="modal-body">
            <h4 class="text-center">Login</h4>
            <form class="px-4 py-3" onSubmit={loginHandler}>
                <div class="form-group">
                    <label>Email:</label>
                    <input class="form-control" type="text" name="email" placeholder="email@example.com" value={userLog.email} onChange={onChangeHandler} />
                </div>
                
                <div class="form-group">
                    <label>Password:</label>
                    <input class="form-control" type="password" name="password" placeholder="Password" value={userLog.password} onChange={onChangeHandler} />
                </div>
                
                <button class="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login