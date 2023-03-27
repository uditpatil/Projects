import React from "react";
import { useNavigate } from "react-router-dom";

const CancelButton = props =>{
    const navigate = useNavigate();
    const onClickHandler = (e) =>{
        e.preventDefault();
        navigate("/mindmap/home")
    }
    return(
        <button class="btn btn-secondary" onClick={onClickHandler}>Cancel</button>
    )
}

export default CancelButton;