import TheSprite from "../TheSprite/TheSprite"

export default function PkmnHomeList ({pkList}) {
    return (
        <div className={`pkContainer`}>
            {pkList.map((pokemon, i) => {
                return( 
                    <TheSprite pokemon={pokemon}/>
                )
            })}
        </div>
    )
}

