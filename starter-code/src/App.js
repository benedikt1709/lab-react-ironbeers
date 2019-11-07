import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom'
import AllBeers from "./components/AllBeers"
import BeerDetail from "./components/BeerDetail"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import { Card, CardImg, CardText} from "reactstrap"

class App extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data })
      })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Switch>
        <Route exact path="/">
        <div>
          <Card>
          <Link to="/allbeers">
          <CardImg src="/images/beers.png" alt="Beer"></CardImg>
          </Link>
          <h1>All Beers</h1>
          <CardText style={{textAlign: "center !important"}}>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
          </Card>
        </div>
        <div>
        <Card>
          <Link to="/randombeer">
          <CardImg src="/images/random-beer.png" alt="Beer"></CardImg>
          </Link>
          <h1>Random Beer</h1>
          <CardText>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
        </Card>
        </div>
        <div>
        <Card>
          <Link to="/newbeer">
          <CardImg src="/images/new-beer.png" alt="Beer"></CardImg>
          </Link>
          <h1>New Beer</h1>
          <CardText>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
          </Card>
        </div>
        </Route>
        <Route exact path="/allbeers" component={AllBeers}/>
        <Route path="/allbeers/:_id" component={BeerDetail} />
        <Route path="/randombeer" component={RandomBeer}/>
        <Route path="/newbeer" component={NewBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
