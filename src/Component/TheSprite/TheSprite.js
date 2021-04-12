import { useEffect, useState } from "react";
import Tylers_Cap_Function from "../Cap"
import DefaultStats from "../DefaultStats.json"
import {Link} from "react-router-dom"

export default function TheSprite ({pokemon}) {
    const [pkPic, setPkPic] = useState("")
    const [pkPicShiny, setPkPicShiny] = useState("")
    const [pkId, setPkId] = useState("")
    const [pkName, setPkName] = useState("ditto")
    const [pkDetails, setPkDetails] = useState(DefaultStats)
    const [currentPic, setCurrentPic] = useState(pkPic)
    const [theError, setTheError] = useState(" ")


    const fetchInfo = async() => {
        try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            setPkPic(data.sprites.front_default)
            setPkPicShiny(data.sprites.front_shiny)
            setPkId(data.species.url.split("/").map((string) => parseInt(string)).filter((x) => x>0)[0])
            setPkName(data.species.name)
            setCurrentPic(data.sprites.front_default)
            setPkDetails(data)
        } catch (err) {
            setTheError(`${err}`);
        }
    }
    const handleMouseOver= () => {
        setCurrentPic(pkPicShiny);
     }
     
    const handleMouseLeave = () => {
        setCurrentPic(pkPic);
     }
    useEffect(()=> {
      fetchInfo();
    }, [pokemon])
    const firstCap = Tylers_Cap_Function(pkName)
    return (
        <div>
            <Link target='_blank' to={`/All/${pkId}`}>
                <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className="spriteBox">
                    <h4>{pkId}-{firstCap}</h4>
                    <div>

                        {pkDetails.types.map((type,i) => {
                            return(
                                <p key={i} className={`${type.type.name} types`}>{Tylers_Cap_Function(type.type.name)} </p>
                                )
                            })}
                    </div>
                    <img className={"allPageSprites"} src={currentPic} alt={pkName} />
                </div>
            </Link>
        </div>
    )
}