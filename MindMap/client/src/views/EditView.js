import React,{ useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditView = props =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    const [patient, setPatient] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then((res) => {
                setPatient(res.data);
                setLoaded(true)
            })
            .catch(err=>{
                console.log(err)
            })
    })
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/notes/" + id, data)
            .then((res)=>{
                navigate("/mindmap/home");
            })
            .catch(err =>{
                console.log(err);
            })
    }
    return (
        <div>
            <NavBar />
            {loaded &&
                <EditForm onSubmitHandler={onSubmitHandler} 
                initialAge={patient.age}
                initialStressType={patient.streeType}
                initialNotes={patient.notes}
                />
            }
        </div>
    )
}

export default EditView;