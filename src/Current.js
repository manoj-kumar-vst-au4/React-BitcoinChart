import React, { Component } from 'react'

export default class Current extends Component {
    render() {
        return (
            <div  style={{ display: 'flex', justifyContent: 'center'}}>
                <h3 className="border border-light py-1 mt-2 shadow px-2 bg-light" style={{color: "gray"}}>Bitcoin / U.S Dollar : {this.props.currentData.rate_float}</h3>
            </div>
        )
    }
}
