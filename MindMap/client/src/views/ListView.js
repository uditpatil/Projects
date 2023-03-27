import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import axios from 'axios';
import appImage from "../assets/FirstPage.png"
const ListView = props =>{
    const [helpers, setHelpers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/helpers")
            .then((res) =>{
                console.log(res.data);
                setHelpers(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])
    return(
        <div style={{
            backgroundImage: `url(${appImage})`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <NavBar />
            <ul>
                {helpers.map((helper, index) => {
                    return(
                        <ul class="list-group list-group-flush" key={index}>
                            <li class="list-group-item">
                                <h4 class="fw-bold text-dark">{helper.helperName}</h4>
                                <div class="fw-bold">{helper.profession}</div>
                                <div>{helper.speciality}<br/>
                                {helper.experience} years of experience<br/>
                                {helper.address}<br/>
                                {helper.contact}</div>
                            </li>
                        </ul>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListView;