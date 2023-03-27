import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import welcomeImage from "../assets/WelcomePage.png";
const LoginView = props => {
    return(
        <div class="container" style={{
            backgroundImage: `url(${welcomeImage})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100%"
        }}>
            <div class="row d-flex text-light">
                <div class="col">
                    <Register />
                </div>
                <div class="col">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginView;