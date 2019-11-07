import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { Spinner } from "reactstrap";
import "../components/CardStyling.css";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    console.log("Params", this.props.match.params);
    const beerID = this.props.match.params._id;
    let thisBeer = this.state.beers.find(beer => beer._id === beerID);
    return (
      <div>
        <Header></Header>
        {this.state.beers.length === 0 ? (
          <Spinner color="success"></Spinner>
        ) : (
          <div>
            <div key={thisBeer._id} className="card bg-light text-center">
              <div className="overflow">
                <img
                  className="card-img-top"
                  src={thisBeer.image_url}
                  alt="Ein gutes Bier"
                ></img>
              </div>
              <p className="card-title">{thisBeer.name}</p>
              <p className="card-text text-secondary">{thisBeer.tagline}</p>
              <p className="card-text text-secondary">
                First brewed in {thisBeer.first_brewed}
              </p>
              <p className="card-text text-secondary">
                Attenuation Level of {thisBeer.attenuation_level}
              </p>
              <p className="card-text text-secondary">{thisBeer.description}</p>
              <p className="card-text text-secondary">
                Posted by: {thisBeer.contributed_by}
              </p>
              <Link to={"/allbeers/" + beerID}></Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BeerDetail;
