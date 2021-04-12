import { useEffect, useState } from "react";
import styles from "./Evolutions.module.css"
import DefaultEvo from "../DefaultEvolutionChain.json"

import EvoSprite from "./EvoSprites";

export default function Evolutions (props) {
    const [theChain, setTheChain] = useState(DefaultEvo);
    const [theError, setTheError] = useState(" ")
    const fetchPokeData = async() => {
        try {
            const res = await fetch(props.evoChain.url);
            const data = await res.json();
            setTheChain(data)
        } catch (err) {
            setTheError(`${err}`);
        }
    }
    const checkFirst = () => {
        return( <div className={styles.firstEvolution}>
                <EvoSprite name={theChain.chain.species.name} url={theChain.chain.species.url}/>
            </div>
        )
    }
    const checkSecond = () => {
        if(theChain.chain.evolves_to !== "undefined") {
            const thePoke = theChain.chain.evolves_to.map((evos, i) => {
                return(
                    <EvoSprite key={i} name={evos.species.name} url={evos.species.url}/>
                )
            })
            return (<div className={styles.secondEvolution}>
                {thePoke}
                </div>);
        }
    }
    const checkThird = () => {
        if(theChain.chain.evolves_to !== "undefined") {
            const thePoke = theChain.chain.evolves_to.map((evos, i) => {
                const theEvos = evos.evolves_to.map((lastEvos, j) => {
                    return (
                        <EvoSprite key={`${i}${j}`} name={lastEvos.species.name} url={lastEvos.species.url}/>
                    )
                })
                return theEvos
            })
            return (<div className={styles.thirdEvolution}>
                {thePoke}
                </div>);
        }
    }
    useEffect(()=> {
        fetchPokeData();

    }, [props.evoChain.url])
    return (
        <div className={styles.evolutionBox}>
            <div className={styles.checkFirst}>
            {checkFirst()}
            </div>
            <div className={styles.checkSecond}>
            {checkSecond()}
            </div>
            <div className={styles.checkThird}>
            {checkThird()}
            </div>
        </div>
    )
}
/*
export default function Evolutions (props) {
    const [theChain, setTheChain] = useState(DefaultEvo)
    const [firstChain, setFirstChain] = useState(theChain.chain)
    const [secondChain, setSecondChain] = useState(theChain.chain.evolves_to)
    const [thirdChain, setThirdChain] = useState(theChain.chain.evolves_to[0].evolves_to)

    console.log(firstChain.species.name)
    console.log(secondChain.name)
    console.log(thirdChain.name)
    // const fetchPokeData = async() => {
    //     try {
    //         const res = await fetch(props.evoChain.url);
    //         const data = await res.json();
    //         setTheChain(data)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // const checkFirst = () => {
    //     if(theChain.chain.evolves_to !== "undefined") {
    //             return( <div className={styles.firstEvolution}>
    //                     <EvoSprite name={theChain.chain.species.name} />
    //                 </div>
    //             )
    //     }
    // }
    // const checkSecond = () => {
    //     if(theChain.chain.evolves_to !== "undefined") {
    //         const thePoke = theChain.chain.evolves_to.map((evos, i) => {
    //             return(
    //                 <EvoSprite key={i} name={evos.species.name} />
    //             )
    //         })
    //         return (<div className={styles.secondEvolution}>
    //             {thePoke}
    //             </div>);
    //     }
    // }
    // const checkThird = () => {
    //     if(theChain.chain.evolves_to !== "undefined") {
    //         const thePoke = theChain.chain.evolves_to.map((evos, i) => {
    //             const theEvos = evos.evolves_to.map((lastEvos, j) => {
    //                 return (
    //                     <EvoSprite key={`${i}${j}`} name={lastEvos.species.name} />
    //                 )
    //             })
    //             return theEvos
    //         })
    //         return (<div className={styles.thirdEvolution}>
    //             {thePoke}
    //             </div>);
    //     }
    // }
    // useEffect(()=> {
    //     fetchPokeData();

    // }, [props.evoChain.url])
    return (
        <div className={styles.evolutionBox}>
            <div className={styles.checkFirst}>
            {checkFirst()}
            </div>
            <div className={styles.checkSecond}>
            {checkSecond()}
            </div>
            <div className={styles.checkThird}>
            {checkThird()}
            </div>
            hi
        </div>
    )
}

*/