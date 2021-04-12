import DefaultSpecies from "../DefaultSpecies.json"
import DefaultStats from "../DefaultStats.json"
import Varieties from "../Varieties/Varieties"
import Tylers_Cap_Function from "../Cap"
import Type from "../Type/Type"
import styles from "../TheDetails/TheDetails.module.css"





export default function ErrorPage () {
    const pokeData=DefaultSpecies
    const theDeets =DefaultStats

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
        if(pokeData.varieties.length >1){
            return <Varieties pokeData={pokeData} />
        }
    }
    const firstCap = Tylers_Cap_Function(theDeets.name)
    return (
        <div className={styles.mainDeetDiv}>
            <h1>THIS IS AN ERROR PAGE! <br/>
            ENJOY DITTO INSTEAD!!!</h1>
            <h1> No.{theDeets.id} - {firstCap}</h1>
            <Type pkDetails={theDeets}/>
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
                    <img src={theDeets.sprites.front_default} alt={firstCap} />
                </div>
                {shinyCheck(theDeets.sprites.front_shiny, firstCap)}
            </div>
            <div className={styles.dex}>
                <h2>Description</h2>
                <p>{textFlavor()}</p>
            </div>
        </div>
    )
}