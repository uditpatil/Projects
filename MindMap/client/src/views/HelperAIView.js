import React from 'react';
import HelperAI from '../components/HelperAI';

const HelperAIView = () =>{
    //const [message, setMessage] = useState("");
    //const [response, setResponse] = useState("")

    //const onSubmitHandler = async (e) =>{
        //e.preventDefault();
        //try{
            //const res = await axios.post("/api/cahtbot/", {message});
            //setResponse(res.data);
        //}
        //catch (error) {
        //    console.log(error);
        //}
    //}
    return(
        <div>
            <HelperAI />
        </div>
    )
}

export default HelperAIView;;