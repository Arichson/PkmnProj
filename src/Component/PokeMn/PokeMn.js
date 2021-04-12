import { useEffect, useState } from "react";
import DefaultStats from "../DefaultStats.json"
import TheDetails from "../TheDetails/TheDetails"
export default function PokeMn ({id}) {

    const [pkDetails, setPkDetails] = useState(DefaultStats)
    const [theError, setTheError] = useState(" ")
    
    const fetchPoke = async() => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
            const data = await res.json();
            setPkDetails(data)
        } catch (err) {
            setTheError(`${err}`);
        }
    }
    useEffect(()=> {
        fetchPoke();
    }, [id])
    return (
        <div>
            <TheDetails name={pkDetails.name} pkDetails={pkDetails}/>
        </div>
    )
}
