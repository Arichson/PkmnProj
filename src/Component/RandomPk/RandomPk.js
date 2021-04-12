import DefaultStats from "../DefaultStats.json"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Tylers_Cap_Function from "../Cap"

export default function RandomPk () {
    const [theNum, setTheNum] = useState(Math.floor(Math.random()*899))
    const [theError, setTheError] = useState(" ")
    const [pkPic, setPkPic] = useState(DefaultStats.sprites.front_default)
    const [pkPicShiny, setPkPicShiny] = useState("")
    const [pkName, setPkName] = useState(DefaultStats.species.name)
    const [currentPic, setCurrentPic] = useState(DefaultStats.sprites.front_default)
    const [currentPicShiny, setCurrentPicShiny] = useState(DefaultStats.sprites.front_shiny)
    const fetchPoke = async() => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + theNum);
            const data = await res.json();
            setPkPic(data.sprites.front_default)
            setPkPicShiny(data.sprites.front_shiny)
            setPkName(data.species.name)
        } catch (err) {
            setTheError(`${err}`);
        }
    }
    const transform= () => {
        setCurrentPic(pkPic);
    }
    
    const changeBack = () => {
        setCurrentPic(DefaultStats.sprites.front_default);
    }
    const transformShiny= () => {
        setCurrentPicShiny(pkPicShiny);
    }
    
    const changeBackShiny = () => {
        setCurrentPicShiny(DefaultStats.sprites.front_shiny);
    }
    const bothTransform = () => {
        transformShiny();
        transform();
    }
    const bothChangeBack = () => {
        changeBackShiny();
        changeBack();
    }
    useEffect(()=> {
        fetchPoke();
    }, [])
    return (
        <div className="theRandom">
            <Link to={`/All/${pkName}`}>
                <div className="pkLinkBox">
                    <div className="theBG">
                        <h4 className="theRandomPkName" onMouseEnter={bothTransform} onMouseLeave={bothChangeBack}>{Tylers_Cap_Function(pkName)}</h4>
                        <div className="randomDiv">
                            <img onMouseEnter={transform} onMouseLeave={changeBack} src={currentPic} alt={`Ditto`} />
                            <img onMouseEnter={transformShiny} onMouseLeave={changeBackShiny} src={currentPicShiny} alt={`Ditto`} /> <br/>
                        </div>
                    </div>
                </div>
            </Link>
            <button onMouseEnter={bothTransform} onMouseLeave={bothChangeBack} className="randomButton" onClick={()=> {
                setTheNum(Math.floor(Math.random()*899))
                fetchPoke()
            }}>Random Transform</button>
        </div>
    )
}