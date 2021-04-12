import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import All from './All'
import Home from './Home'
import PokeMn from "./Component/PokeMn/PokeMn"
import ErrorPage from "./Component/ErrorPage/ErrorPage"


// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

const routes = [
  {
    Component: All,
    key: 'All',
    path: '/All'
  },
  {
    Component: Home,
    key: 'Home',
    path: '/'
  }
]

export default function App () {
  return (
    <Router>
      <header>
        <h1 className="homePageLink"><Link to="/">PkmnProj</Link></h1>
        <nav>
          <Link className="allLink" to={routes[0].path}>{routes[0].key}</Link>
          <a className="PokeApiLink" target='_blank' rel="noreferrer" href="https://pokeapi.co/">PokeAPI</a>
        </nav>
      </header>
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
            key={key}
            path={path}
            exact
            render={props => <Component {...props} page={key} />}
            />))
          }
          <Route exact path="/All/:id" render={ThePoke => {
                // console.log(ThePoke)
              return <PokeMn {...ThePoke} id={ThePoke.match.params.id}/>
            }} />
          <Route component={ErrorPage} />
      </Switch>
      <footer>
        <nav>
          <Link className="allLink" to={routes[0].path}>{routes[0].key}</Link>
          <a className="PokeApiLink" target='_blank' rel="noreferrer" href="https://pokeapi.co/">PokeAPI</a>
        </nav>
        <p>Made by Arichson using <span><a target='_blank' rel="noreferrer" href="https://pokeapi.co/">PokeAPI</a></span></p>
      </footer>
    </Router>
  )
}
