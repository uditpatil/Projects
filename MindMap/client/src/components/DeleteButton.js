import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const DeleteButton = props => {
    const { id } = props;
    const navigate = useNavigate();
    const onClickHandler = (e) => {
        axios.delete("http://localhost:8000/api/notes/" + id)
            .then(response => {
                console.log(response);
                navigate('/mindmap/home'); 
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button class="btn btn-danger" onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton;