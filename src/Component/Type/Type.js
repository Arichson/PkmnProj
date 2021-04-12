import { useEffect, useState } from "react"
import Tylers_Cap_Function from "../Cap"

const TheTypes = ({pkDetails}) => {
    const allTypes = pkDetails.types.map((type) => {
        return type.type.name
        })
    if(allTypes.length === 1){
        allTypes.push(allTypes[0])
    }
    const theTypes = [ ... new Set(allTypes)]
    function TypeColor(type1, type2) {
        const [color1, setColor1] = useState("white")
        const [color2, setColor2] = useState(color1)
        const checkColor1=(type) => {
            if(type === "grass")        {setColor1("green");                    return;}
            if(type === "psychic")      {setColor1("palevioletred");            return;}
            if(type === "electric")     {setColor1("yellow");                   return;}
            if(type === "fire")         {setColor1("orangered");                return;}
            if(type === "rock")         {setColor1("lightsalmon");              return;}
            if(type === "ground")       {setColor1("rgb(158, 90, 1)");          return;}
            if(type === "poison")       {setColor1("purple");                   return;}
            if(type === "dark")         {setColor1("#2f504f");                  return;}
            if(type === "bug")          {setColor1("lightgreen");               return;}
            if(type === "fighting")     {setColor1("sienna");                   return;}
            if(type === "normal")       {setColor1("white");                    return;}
            if(type === "water")        {setColor1("rgb(22, 104, 255)");        return;}
            if(type === "flying")       {setColor1("rgb(188, 236, 255)");       return;}
            if(type === "fairy")        {setColor1("lightpink");                return;}
            if(type === "steel")        {setColor1("rgb(116, 116, 116)");       return;}
            if(type === "dragon")       {setColor1("rgb(73, 53, 160)");         return;}
            if(type === "ice")          {setColor1("rgb(0, 157, 255)");         return;}
            if(type === "ghost")        {setColor1("rgb(146, 112, 168)");       return;}
        }
        const checkColor2=(type) => {
            if(type === "undefined")    {setColor2("purple");                   return;}
            if(type === "null")         {setColor2("orange");                   return;}
            if(type === "grass")        {setColor2("green");                    return;}
            if(type === "psychic")      {setColor2("palevioletred");            return;}
            if(type === "electric")     {setColor2("yellow");                   return;}
            if(type === "fire")         {setColor2("orangered");                return;}
            if(type === "rock")         {setColor2("lightsalmon");              return;}
            if(type === "ground")       {setColor2("rgb(158, 90, 1)");          return;}
            if(type === "poison")       {setColor2("purple");                   return;}
            if(type === "dark")         {setColor2("#2f504f");                  return;}
            if(type === "bug")          {setColor2("lightgreen");               return;}
            if(type === "fighting")     {setColor2("sienna");                   return;}
            if(type === "normal")       {setColor2("white");                    return;}
            if(type === "water")        {setColor2("rgb(22, 104, 255)");        return;}
            if(type === "flying")       {setColor2("rgb(188, 236, 255)");       return;}
            if(type === "fairy")        {setColor2("lightpink");                return;}
            if(type === "steel")        {setColor2("rgb(116, 116, 116)");       return;}
            if(type === "dragon")       {setColor2("rgb(73, 53, 160)");         return;}
            if(type === "ice")          {setColor2("rgb(0, 157, 255)");         return;}
            if(type === "ghost")        {setColor2("rgb(146, 112, 168)");       return;}
        }
        useEffect(()=> {
            checkColor1(type1);
        }, [type1])
        useEffect(()=> {
            checkColor2(type2);
        }, [type2])
        
        return ({
            background: `linear-gradient( to right, ${color1}, ${color2})`,
            width: `50%`,
            border: `2px solid ${color2}`,
            padding: `5px`,
            display: "flex",
            borderLeft: `none`,
            clipPath: `polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 0% 0%)`,
            textAlign: `left`,
        })
    }
    const fontColor = (type) => {
        if( type === "dark" || type === "poison" || type === "dragon"){
            return {fontColor: "white"}
        } else { return {fontColor: "black"}}
    }
    return (
        <div style={TypeColor(allTypes[0], allTypes[1])}>
            <p style={fontColor()}>Type: </p> 
            {theTypes.map((type,i) => {
                return(
                    <div key={i}>
                        <p className={`${type} types`}>{Tylers_Cap_Function(type)}</p>
                    </ div>
                )
            })}
        </div>    
    )
}
export default TheTypes;