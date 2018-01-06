import React, { Component } from 'react';
import $ from 'jquery';




export default class Content extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
  $("#myData").click(function(){
    $(this).toggleClass("myBlue");
  });

  }

  render() {
    return (

      <div className="container">
      <div  className="row align-items-start">
        <div  className="col">
        <h2>วิธีการใส่ Jquery ใน React .js</h2>
          <p>การทำงาน......</p>
  <div id="myData" className="basic myBlue">Please Click Me!</div>
        </div>
        <div  className="col">
          One of three columns
        </div>
        <div  className="col">
          One of three columns
        </div>
      </div>
      <div  className="row align-items-center">
        <div className="col">
          One of three columns
        </div>
        <div  className="col">
          One of three columns
        </div>
        <div  className="col">
          One of three columns
        </div>
      </div>
      <div  className="row align-items-end">
        <div  className="col">
          One of three columns
        </div>
        <div  className="col">
          One of three columns
        </div>
        <div  className="col">
          One of three columns
        </div>
      </div>
    </div>

    );
  }
}
