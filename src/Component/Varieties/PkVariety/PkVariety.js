import {useState, useEffect} from "react"



export default function PkVariety ({page}){
    const [name, setName] = useState(" ")
    const [pic, setPic] = useState(" ")
    const [picShiny, setPicShiny] = useState(" ")
    const [currentPic, setCurrentPic] = useState (pic)
    const [theError, setTheError] = useState(" ")

    const fetchPokeData = async() => {
        try {
            const res = await fetch(page);
            const data = await res.json();
            setName(data.name)
            setPic(data.sprites.front_default)
            setPicShiny(data.sprites.front_shiny)
        } catch (err) {
            setTheError(`${err}`);
        }
    }
    const transform= () => {
        setCurrentPic(picShiny);
    }
    
    const changeBack = () => {
        setCurrentPic(pic);
    }
    
    useEffect(()=> {
        fetchPokeData();
    }, [page])
    useEffect(()=> {
        setCurrentPic(pic)
    }, [pic])

    return (
        <div>
            <img onMouseEnter={transform} onMouseLeave={changeBack} src={currentPic} alt={name} />
        </div>
    )
}