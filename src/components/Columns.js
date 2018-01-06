import React, { Component } from 'react';




export default class Columns extends Component {
  render() {
    return (

    <div className="container">
    <h3>Two columns</h3>
    <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>
    <div className="row">
      <div className="col-md-8">.col-md-8</div>
      <div className="col-md-4">.col-md-4</div>
    </div>
    </div>

    );
  }
}
