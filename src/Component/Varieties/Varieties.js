import { useEffect, useState } from "react"
import Tylers_Cap_Function from "../Cap"
import styles from "./Varieties.module.css"
import PkVariety from "./PkVariety/PkVariety"

export default function Varieties ({pokeData, pkDetails}){
    const [theSpecies, setTheSpecies] = useState([])
    const theFunc = () => {
        const theArr = pokeData.varieties.map((pokemon, i) => {
            return(
                <div key={i} className={styles.thePkContainer}>
                    <p>{Tylers_Cap_Function(pokemon.pokemon.name)}</p>
                    <PkVariety page={pokemon.pokemon.url}/>
                </div>
            )
        } )
        console.log(pkDetails.forms)
        pkDetails.forms.forEach((pokemon, i) => {
            theArr.push(
                <div key={i} className={styles.thePkContainer}>
                    <p>{Tylers_Cap_Function(pokemon.name)}</p>
                    <PkVariety page={pokemon.url}/>
                </div>
            )
        })
        theArr.shift()
        theArr.sort()
        return theArr
    }
    useEffect(()=> {
        setTheSpecies(theFunc());
    },[pokeData])
    return(
        <div className={styles.containAllForms}>
            <h2>{Tylers_Cap_Function(pokeData.name)} Forms</h2>
            <div className={styles.formContainer}>
                {theSpecies}
            </div>
        </div>
    )
}