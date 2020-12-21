import React, { Component } from 'react'
import Option from './Option'
import Total from './Total'

export default class Summary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Option selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    )
  }
} 
