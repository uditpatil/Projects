import React, {useState} from "react";
import CancelButton from "./CancelButton";

const HelperForm = props =>{
    const {onSubmitHandler} = props;
    const [helperName, setHelperName] = useState("");
    const [profession, setProfession] = useState("");
    const [address, setAddress] = useState("");
    const [experience, setExperience] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [contact, setContact] = useState("");
    return(
        <form onSubmit={e => {onSubmitHandler(e, {helperName, profession, address, experience, speciality, contact}) }}>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Name:</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="helperName" onChange={(e) => {setHelperName(e.target.value)}}/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Are you a doctor or therapist?</label>
                <div class="col-sm-6">
                    <select class="form-control" name="profession" onChange={(e) => {setProfession(e.target.value)}}>
                        <option>Doctor</option>
                        <option>Therapist</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Address:</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="address" onChange={(e) => {setAddress(e.target.value)}}/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Years of experience:</label>
                <div class="col-sm-3">
                    <select class="form-control" name="experience" onChange={(e) => {setExperience(e.target.value)}}>
                        <option>less than 1 year</option>
                        <option>1-5</option>
                        <option>5-10</option>
                        <option>10-15</option>
                        <option>more than 15 years</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Speciality</label>
                <div class="col-sm-6">
                    <select class="form-control" name="speciality" onChange={(e) => {setSpeciality(e.target.value)}}>
                        <option>Child therapiest</option>
                        <option>Family doctor</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Contact Number:</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="contact" onChange={(e) => {setContact(e.target.value)}}/>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start"s>
                <input class="btn btn-success" type="submit" />
                <br/><CancelButton />
            </div>
        </form>
    )
}

export default HelperForm;