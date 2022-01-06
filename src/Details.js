import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
    // we use object.assign to destructure the whole obj or else
    // we need to map the whole obj property by property
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
    } = this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city},${state}`}</h2>
          {/* <img
            className="img-radius"
            src={images[0]}
            alt={name}
            width="200"
            height="200"
          ></img> */}
          <button> Adopt {name}</button>
          <p> {description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
