import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOnePlace = () => {
    /* Expecting an empty object - because it's only one, not an array. */
    const [ place, setPlace ] = useState({});
    const { id } = useParams();

    /* from our .env file */
    let API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(API + "/places/" + id)
            .then((res)=>{
                setPlace(res.data);
            });
    }, [])

    return (
        <ul>
            <li>Name: {place.name}</li>
            <li>City: {place.city}</li>
            <li>State: {place.state}</li>
            <li>Country: {place.country}</li>
            <li>Average Temp: {place.average_temp}</li>
            <li>Beaches nearby? {place.has_nearby_beaches ? "True" : "False" }</li>
        </ul>
    )
}

export default DisplayOnePlace;