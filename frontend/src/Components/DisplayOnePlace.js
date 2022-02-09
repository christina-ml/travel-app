import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOnePlace = () => {
    /* Expecting an empty object - because it's only one, not an array. */
    const [ place, setPlace ] = useState({});
    const { id } = useParams();

    /* from our .env file */
    let API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API + "/places/" + id)
            .then((res)=>{
                console.log(res);
                // setPlace(res.data);
            })
    }, []);

    return (
        <div>
            Display One Place - at this id: {id} - DisplayOnePlace component 
        </div>
    )
}

export default DisplayOnePlace;