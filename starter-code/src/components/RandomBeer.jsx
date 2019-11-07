import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { Spinner } from "reactstrap";
import "../components/CardStyling.css";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ beers: response.data });
      });
  }
  render() {
    let randomBeer = this.state.beers;
    let beerID = this.state.beers._id;
    return (
      <div>
        <Header></Header>
        {this.state.beers.length === 0 ? (
          <Spinner color="success"></Spinner>
        ) : (
          <div>
            <div key={randomBeer._id} className="card bg-light text-center">
              <div className="overflow">
                <img
                  className="card-img-top"
                  src={randomBeer.image_url}
                  alt="Ein gutes Bier"
                ></img>
              </div>
              <p className="card-title">{randomBeer.name}</p>
              <p className="card-text text-secondary">{randomBeer.tagline}</p>
              <p className="card-text text-secondary">
                First brewed in {randomBeer.first_brewed}
              </p>
              <p className="card-text text-secondary">
                Attenuation Level of {randomBeer.attenuation_level}
              </p>
              <p className="card-text text-secondary">
                {randomBeer.description}
              </p>
              <p className="card-text text-secondary">
                Posted by: {randomBeer.contributed_by}
              </p>
              <Link to={"/randombeer/" + beerID}></Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RandomBeer;
