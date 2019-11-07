import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Searchbar from "./Searchbar";
import SearchbarDatabase from "./SearchbarDatabase";
import { Spinner } from "reactstrap";
import "../components/CardStyling.css";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      filteredBeers: []
    };
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data, filteredBeers: response.data });
    });
  }

  onSearch = searchString => {
    let filteredBeer = [...this.state.beers];
    filteredBeer = filteredBeer.filter(item => {
      return item.name.toLowerCase().search(searchString) !== -1;
    });
    this.setState({ filteredBeers: filteredBeer });
  };

  onSearchDatabase = searchString => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q="+searchString).then(response => {
    this.setState({filteredBeers: response.data});
    });
}

  render() {
    return (
      <div>
        <Header></Header>
        <SearchbarDatabase
          content={this.state.beers}
          onSearch={this.onSearchDatabase}
        ></SearchbarDatabase>
        <Searchbar
          content={this.state.beers}
          onSearch={this.onSearch}
        ></Searchbar>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {this.state.filteredBeers.length === 0 ? (
              <Spinner color="success"></Spinner>
            ) : (
              this.state.filteredBeers.map(item => (
                <div className="col-md-4">
                  <div key={item._id} className="card bg-light text-center">
                    <div className="overflow">
                      <img
                        className="card-img-top"
                        src={item.image_url}
                        alt="Ein gutes Bier"
                      ></img>
                    </div>
                    <div className="card-body text-dark">
                      <p className="card-title">{item.name}</p>
                      <p className="card-text text-secondary">{item.tagline}</p>
                      <p className="card-text text-secondary">
                        Created by: {item.contributed_by}
                      </p>
                      <Link
                        key={item._id}
                        to={`/allbeers/${item._id}`}
                        className="btn btn-outline-secondary"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AllBeers;
