import RandomPk from "./Component/RandomPk/RandomPk";

function Home() {
  return (
    <div className="Home">
      <div className="welcome">
        <h2>Welcome to the PkmnProj page. <br /></h2>
        <h3>
          This site was made using <span><a target='_blank' rel="noreferrer" href="https://pokeapi.co/">PokeAPI</a></span>, a pokemon database. <br />
          We have a list of all the current Pokemons but not all of the information on all of them. <br />
          To see the list of all Pokemons, click the All link.
          Also remember that you you see the page of <span style={{fontWeight:"bolder"}}>DITTO</span>, then you might be at an error page.
        </h3>
      </div>
      <div className="random">
        <h2>The Randomizer</h2>
        <h3>Hover over Ditto or the button to see what Ditto will transform into. <br />
          Click the button below to randomize to a different Pokemon. < br/> 
          Click the sprite to visit that Pokemon's page.
        </h3>
        <RandomPk />
      </div>
    </div>
  );
}

export default Home;
