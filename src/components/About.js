import React, { Component } from 'react'
import NewCard from '../NewCard'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>
            Need to gain some skills?
        </h1>
        <a href="https://www.sidehustle.com" rel="noopener noreferrer">Click here</a>
        <NewCard/>
      </div>
    )
  }
}
