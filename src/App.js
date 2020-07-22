import React, { Component } from 'react'
import Current from "./Current";
import Chart from "./Chart";
export default class App extends Component {
  state={
    isLoading: true,
    loading: true,
    currentData: null,
    chartData: null,
    series: null
  }

  componentDidMount= async()=>{
    this.getData=async()=>{
      let current = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      let data = await current.json();
      this.setState({
        currentData: data.bpi.USD,
      })
    }
    let historyData = await fetch("https://api.coindesk.com/v1/bpi/historical/close.json");
    let datas = await historyData.json();
    let datasKeys = Object.keys(datas.bpi);
    let datasValues = Object.values(datas.bpi);
    await this.getData();
    this.refresh = setInterval(() => this.getData(), 1000);
    await this.setState({
      chartData: { 
        xaxis:{
          categories: datasKeys
        }
      },
      series: [{
        name: "Bitcoin Price",
        data: datasValues
      }],
      isLoading: false
    })
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
              {this.state.isLoading ? 
              <div class="spinner-border text-secondary m-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              :
              <div>
                <Current
                currentData={this.state.currentData}
                loading={this.state.loading}
                />
                <Chart
              chartData={this.state.chartData}
              series={this.state.series}
              
            />
                </div>
              }
            </div>
    )
  }
}
