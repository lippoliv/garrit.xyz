import React, { Component } from "react";
import Particles from "react-particles-js";
import "./Home.scss";
import github from "./GitHub.svg";
import linkedin from "./LinkedIn.svg";
import LinkItem from "./LinkItem";

export default class Home extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.config = require("./particleConfig");
  }

  render() {
    return (
      <div>
        <Particles params={this.config} className="particles-js" />
        <div className="container">
          <div className="section-header">
            <h1 className="animated fadeInLeft headline">Hi, I'm Garrit</h1>
            <p id="subheadline" className="animated fadeInRight">
              Software Development is my Passion. Don't hesitate to check out my
              projects!
            </p>
          </div>
        </div>
      </div>
    );
  }
}