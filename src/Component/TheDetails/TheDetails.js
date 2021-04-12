import { useEffect, useState } from "react";
import Evolutions from "../Evolutions/Evolutions"
import DefaultSpecies from "../DefaultSpecies.json"
import DefaultStats from "../DefaultStats.json"
import Varieties from "../Varieties/Varieties"
import Tylers_Cap_Function from "../Cap"
import Type from "../Type/Type"
import styles from "./TheDetails.module.css"


export default function TheDetails ({name, pkDetails}) {
    const [pokeData, setPokeData] = useState(DefaultSpecies)
    const [evoChain, setEvoChain] = useState("sd")
    const [theDeets, setTheDeets] = useState(DefaultStats)
    const [theError, setTheError] = useState(" ")
    const fetchPokeData = async() => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pkDetails.id);
            const data = await res.json();
            setPokeData(data)
            setEvoChain(data.evolution_chain)
        } catch (err) {
            setTheError(`${err}`)
        }
    }
    
    useEffect(()=> {
        fetchPokeData();
        setTheDeets(pkDetails)
    }, [pkDetails])
    const shinyCheck = (pic, altText) => {
        if(pic !== null){
            return (
                <div className={`${styles.shiny} ${styles.deetSiblings}`}>        
                    <p>Shiny</p>
                    <img src={pic} alt={altText} />
                </div>
            )
        }
    }

    const textFlavor = () => {
        const theStuff = pokeData.flavor_text_entries.filter((pkFlavorText) => {
            if(pkFlavorText.language.name === "en"){
                return pkFlavorText;
            }
        })
        return theStuff[theStuff.length-1].flavor_text
    }
    const formCheck = () => {
        if(pokeData.varieties.length >1 || pkDetails.forms.length > 1){
            return <Varieties pokeData={pokeData} pkDetails={pkDetails}/>
        }
    }
    const firstCap = Tylers_Cap_Function(theDeets.species.name)
    return (
        <div className={styles.mainDeetDiv}>
            <h1> No.{pkDetails.id} - {firstCap}</h1>
            <Type pkDetails={pkDetails}/>
            <div className={styles.sprites}>
                <div  className={`${styles.details} ${styles.deetSiblings}`}>
                    <div>
                        <p>Height: {theDeets.height/10} m</p>
                        <p>Weight: {theDeets.weight/10} kg</p>
                        <p>Color: {Tylers_Cap_Function(pokeData.color.name)}</p>
                        <p>Shape: {Tylers_Cap_Function(pokeData.shape.name)}</p>
                        <p>Genus: {pokeData.genera[7].genus}</p>
                        <p>Generation: {Tylers_Cap_Function(pokeData.generation.name.toUpperCase())}</p>
                    </div>
                </div>
                <div className={`${styles.regular} ${styles.deetSiblings}`}>
                    <p>Regular</p>
                    <img src={pkDetails.sprites.front_default} alt={firstCap} />
                </div>
                {shinyCheck(pkDetails.sprites.front_shiny, firstCap)}
            </div>
            <div className={styles.dex}>
                <h2>Description</h2>
                <p>{textFlavor()}</p>
            </div>
            <div className={styles.containsAllEvos}>
                <h2>Evolution Stages</h2>
                <Evolutions evoChain={evoChain} theName={name}/>
            </div>
            <div>
                {formCheck()}
            </div>
        </div>
    )
}