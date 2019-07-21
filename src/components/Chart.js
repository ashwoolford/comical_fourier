import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      noisyChartData: props.noisyChartData
    };
  }

  render() {
    return (
      <div className="chart">
        <div className="chart-1">
          <Line
            data={this.state.chartData}
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
        <div className="chart-2">
          <Line
            data={this.state.noisyChartData}
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
}

export default Chart;
