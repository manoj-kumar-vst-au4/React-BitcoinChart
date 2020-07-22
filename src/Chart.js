import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default class chart extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Chart
              options={this.props.chartData}
              series={this.props.series}
              width="1500"
              height="600"
              />
            </div>
          )
        }
      }
