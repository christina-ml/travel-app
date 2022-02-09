import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayAllPlaces = () => {
    const [ places, setPlaces ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    /* We want it to run on load, but only once. */
    useEffect(()=>{
        axios.get(API + "/places")
            .then((res)=>{
                setPlaces(res.data);
            })
    }, [])

    /* Returning this as an array of JSX. using the index of our .map as a key, to get rid of warning */
    let placesToDisplay = places.map((place, index)=>{
        return <li key={index}>
                    {place.name}, 
                    {place.city}
                    <Link to={`/places/${place.id}`}>View Details</Link>
                </li>
    })

    return (
        <div>
            <div>Displaying all places</div>
            <ul>
                { placesToDisplay }
            </ul>
        </div>
    )
}

export default DisplayAllPlaces;