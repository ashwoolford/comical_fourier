import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "react-bootstrap";
import "./Myfft.css"
var fft = require("fft-js").fft;
var ifft = require("fft-js").ifft;

export class Myfft extends Component {
  state = {
    psdData: {},
    filtData: {},
    isClicked: false
  };

  showGraph() {

    var phasors = fft(this.props.Y);
    console.log(this.state.isClicked);

    let PSD = [];
    let indices = [];
    for (let i = 0; i < 1024; ++i) {
      PSD[i] = (Math.pow(phasors[i][0], 2) + Math.pow(phasors[i][1], 2)) / 1000;

      if (PSD[i] >= 140) {
        indices[i] = 1;
      } else indices[i] = 0;
    }

    for (let i = 0; i < 1024; ++i) {

      phasors[i][0] = indices[i] * phasors[i][0];
      phasors[i][1] = indices[i] * phasors[i][1];
    }

    var filtered = ifft(phasors);

    var Y_M = [];
    var freq = [];


    for (let i = 0; i < 1024; ++i) {
      Y_M[i] = filtered[i][0];
      freq[i] = i;
    }

    this.setState({
      isClicked: true,
      psdData: {
        labels: freq.slice(0, 512),
        datasets: [
          {
            label: "Power spectrum density (PSD)",
            data: PSD.slice(0, 512),
            backgroundColor: ["rgba(91, 44, 111, 0.6)"]
          }
        ]
      },
      filtData: {
        labels: freq.slice(0, 100),
        datasets: [
          {
            label: "Filtered Signal",
            data: Y_M.slice(0, 100),
            backgroundColor: ["rgba(241, 196, 15, 0.6)"]
          }
        ]
      },

    });
  }

  render() {

    if(this.state.isClicked){
      return (
        <div>
          <div className="performbutton">
          <Button variant="primary" onClick={() => this.showGraph()}>Perform FFT</Button>
          </div>
          <div className="psd">
            <Line
              data={this.state.psdData}
              width={100}
              height={150}
              options={{
                maintainAspectRatio: false,
                scales: {
                  xAxes: [
                    {
                      display: false //this will remove all the x-axis grid lines
                    }
                  ]
                }
              }}
            />
          </div>
  
          <div className="filt">
            <Line
              data={this.state.filtData}
              width={100}
              height={150}
              options={{
                maintainAspectRatio: false,
                scales: {
                  xAxes: [
                    {
                      display: false //this will remove all the x-axis grid lines
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="performbutton">
           <Button variant="primary" onClick={() => this.showGraph()}>Perform FFT</Button>
        </div> 
      );
    }
  }
}

export default Myfft;
