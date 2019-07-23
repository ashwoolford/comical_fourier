import React, { Component } from "react";
import Chart from "./Chart";
import Myfft from "./Myfft";
import { Container } from "react-bootstrap";

export default class FFTSimulator extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      chartData: {},
      noisyChartData: {},
      Y: {}
    };
  }

  componentWillMount() {
    this.getChartData();
    // console.log('Component mounting');
  }

  randn_bm(min, max, skew) {
    var u = 0,
      v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = this.randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
  }

  getChartData() {
    //ajax call here

    let dt = 0.001;
    let t = [];
    t[0] = 0;
    let wave = [];
    let pi = 3.1416;
    let noisySignal = [];

    for (let i = 1; i <= 1024; ++i) {
      t[i] = t[i - 1] + dt;
    }

    for (let i = 0; i < 1024; ++i) {
      wave[i] = Math.sin(2 * pi * 50 * t[i]);
      noisySignal[i] = wave[i] + 1.5 * this.randn_bm(-10, 10, 1);
    }

    //console.log(noisySignal.slice(0,10))

    this.setState({
      chartData: {
        labels: t.slice(0, 100),
        datasets: [
          {
            label: "A Simple Sin wave",
            data: wave.slice(0, 100),
            backgroundColor: ["rgba(34, 153, 84, 0.6)"]
          }
        ]
      },

      noisyChartData: {
        labels: t.slice(0, 100),
        datasets: [
          {
            label: "After Adding Noise",
            data: noisySignal.slice(0, 100),
            backgroundColor: ["rgba(231, 76, 60, 0.6)"]
          }
        ]
      },
      Y: noisySignal
    });
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
    console.log("Clicked");
  }

  render() {
    return (
      <Container>
        <Chart
          chartData={this.state.chartData}
          noisyChartData={this.state.noisyChartData}
        />
        <Myfft Y={this.state.Y} />
      </Container>
    );
  }
}
