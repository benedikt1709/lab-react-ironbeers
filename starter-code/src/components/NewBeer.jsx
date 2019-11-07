import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Header from "./Header";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    };
  }

  handleChange = event => {
    // event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", { ...this.state })
      .then(response => {
        console.log(response);
        window.location.href = "/allbeers"; // Bessere Lösung?
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header></Header>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>
              Name:
              <Input type="text" name="name" onChange={this.handleChange} />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Tagline:
              <Input type="text" name="tagline" onChange={this.handleChange} />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Description:
              <Input
                type="text"
                name="description"
                onChange={this.handleChange}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              First Brewed:
              <Input
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Brewers Tips:
              <Input
                type="text"
                name="brewers_tips"
                onChange={this.handleChange}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Attenuation Level:
              <Input
                type="number"
                name="attenuation_level"
                onChange={this.handleChange}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Contributed by:
              <Input
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
              />
            </Label>
          </FormGroup>
          <Button type="submit">Add Beer</Button>
        </Form>
      </div>
    );
  }
}

export default NewBeer;
