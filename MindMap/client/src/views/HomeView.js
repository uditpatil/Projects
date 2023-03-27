import axios from "axios";
import React, {useEffect, useState} from "react";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import appImage from "../assets/FirstPage.png"

const HomeView = props =>{
    const [notes, setNotes] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/notes")
            .then((res) =>{
                console.log(res.data);
                setNotes(res.data);
            })
            .catch(err => {
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
            {notes.map((note, index)=>{
                return(
                    <div class="container text-center" >
                        <ul class="list-group">
                            <li class="row list-group-item d-flex justify-content-between align-items-start" key={index}>
                                {note.age} {note.stressType} {note.notes}
                                    <Link class="col-md-3 offset-md-8" to={"/mindmap/"+ note._id +"/edit"}>
                                        <EditButton />
                                    </Link>
                                    <Link class="col-md-3 offset-md-10" to={"/mindmap/home"}>
                                        <DeleteButton id={note._id}/>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeView;