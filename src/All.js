import { useEffect, useState } from "react";
import PkmnHomeList from "./Component/PkmnHomeList/PkmnHomeList"
import Scroll from "./Component/Scroll/Scroll"
import DefaultPkmn from "./Component/Default.json"
function All(props) {
  const [pkList, setPklist] = useState(DefaultPkmn)
  const [theError, setTheError] = useState(" ")
  // as of right now, the max amount of pkmn is 1118 (the additional forms)
  // all current pokemon above 898 are different forms of previous pokemons
  let offset = 251;
  let limit = 135;

  const fetchAPI = async() => {
    try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
          const data = await res.json();
          setPklist(data.results)
      } catch (err) {
          setTheError(`${err}`);
      }
  }
  useEffect(()=> {
    fetchAPI();
  }, [])
  if(pkList === DefaultPkmn) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <h1>{props.page}</h1>
      <Scroll />
      <PkmnHomeList pkList={pkList}/>
    </div>
  );
}

export default All;
