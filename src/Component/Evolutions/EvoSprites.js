import { useEffect, useState } from "react";
import Tylers_Cap_Function from "../Cap"
import DefaultStats from "../DefaultStats.json"
import {Link} from "react-router-dom"
import styles from "./Evolutions.module.css"

export default function EvoSprite ({name, url}) {
    const [pkPic, setPkPic] = useState("")
    const [pkDetails, setPkDetails] = useState(DefaultStats)
    const [theError, setTheError] = useState(" ")

    const theSpeciesNum = url.split("/").map((string) => parseInt(string)).filter((x) => x>0)[0]
    /////////////fix forms and add forms for some pokemon that doesn't have all their forms
    const fetchInfo = async() => {
console.log(theSpeciesNum)
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${theSpeciesNum}`);
            const data = await res.json();
            setPkPic(data.sprites.front_default)
            setPkDetails(data)
        } catch (err) {
            setTheError(`${err}`);
        }
    }

    useEffect(()=> {
      fetchInfo();
    }, [name])

    return (
        <div>
            <Link to={`/All/${theSpeciesNum}`}>
                <div className={styles.eachPk}>
                    <p>No.{pkDetails.id} - {Tylers_Cap_Function(name)}</p>
                    <img width="100px" src={pkPic} alt={name} />
                </div>
            </Link>
        </div>
        
        
    )
}
