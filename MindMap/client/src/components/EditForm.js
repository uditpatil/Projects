import React, {useState} from "react";
import CancelButton from "./CancelButton";

const EditForm = props =>{
    const { onSubmitHandler, initialAge, initialStressType, initialNotes } = props;
    const [streeType, setStressType] = useState(initialStressType);
    const [notes, setNotes] = useState(initialNotes);
    const [age, setAge] = useState(initialAge);
    return(
        <div>
            <form onSubmit={e => { onSubmitHandler(e, {age, streeType, notes}) }}>
                <p>
                <label class="form-label">Age:</label>
                <input class="form-control" type="number" value={age} name="age" onChange={(e) => {setAge(e.target.value)}}/>
            </p>
            <p>
                <label class="form-label">Type of Stress:</label>
                <select class="form-control" name="stressType" value={setStressType} onChange={(e) => {setStressType(e.target.value)}}>
                    <option>Financial Stress</option>
                    <option>Family Stress</option>
                    <option>Study Stress</option>
                    <option>Carreer Stress</option>
                    <option>Anxiety</option>
                </select>
            </p>
            <p>
                <label class="form-label">Notes:</label>
                <textarea class="form-control" name="notes" rows="20" col="40" value={notes} onChange={(e) => {setNotes(e.target.value)}}></textarea>
            </p>
            <input class="btn btn-warning" type="submit" value="Edit"/>
            <CancelButton />
            </form>
        </div>
    )
}

export default EditForm