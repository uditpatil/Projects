import React, {useState} from 'react';
import CancelButton from './CancelButton';

const PatientForm = props => {
    const {onSubmitHandler} = props;
    const [age, setAge] = useState("");
    const [stressType, setStressType] = useState("");
    const [notes, setNotes] =useState("");
    return(
        <form onSubmit={e => {onSubmitHandler(e, {age, stressType, notes}) }}>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Age:</label>
                <div class="col-sm-6">
                    <input class="form-control text-light" type="number" name="age" onChange={(e) => {setAge(e.target.value)}}/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold" >Type of Stress:</label>
                <div class="col-sm-4">
                    <select class="form-control text-light" name="stressType" onChange={(e) => {setStressType(e.target.value)}}>
                        <option>Financial Stress</option>
                        <option>Family Stress</option>
                        <option>Study Stress</option>
                        <option>Carreer Stress</option>
                        <option>Anxiety</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label text-light fw-semibold">Notes:</label>
                <div class="col-sm-8">
                    <textarea class="form-control text-dark" name="notes" rows="10" col="20" onChange={(e) => {setNotes(e.target.value)}}></textarea>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <input type="submit" class="btn btn-success gap-2"/>
                <CancelButton />
            </div>
        </form>
    )
}

export default PatientForm;