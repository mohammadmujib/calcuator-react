import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    console.log("constructorhello");
  }
  componentDidMount() {
    console.log("did mount hello");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("change");
  }

  render() {
    const { name, age, price } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <h1>{age ? age : "NoAge"}</h1>
        <h1>{price ? price : "0 $"}</h1>
        <h1>Car</h1>

        <h1 style={{ color: this.state.color }}>
          Car has a color {this.state.color}
        </h1>
        <button onClick={() => this.setState({ color: "blue" })}>
          toggle color
        </button>
        <button onClick={() => this.setState({ color: "red" })}>
          toggle color
        </button>
      </div>
    );
  }
}

export default Car;
