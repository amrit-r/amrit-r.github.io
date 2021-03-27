import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="page" id="page-portfolio">
        <div className="bp-header cf bp-grid">
          <div className="bp-grid__elem">
            <h1 className="bp-header__title">Portfolio!</h1>
            <h1 className="bp-header__title">I am Amrit.</h1>
            <br></br>
            <button className="btn default"><i className="fa fa-hand-pointer-o"></i><span> Contact Me</span></button>
          </div>
          <div className="bp-grid__elem" ><img className="bp-img" src="images/1.jpg" style={{ width: "15vw" }} alt="img01" /></div>
        </div>
      </div>
    );
  }
}
