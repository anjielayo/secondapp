import React, { Component } from 'react'
import Button from './Button'

export default class Classcomp extends Component {
  render() {
    return (
      <div>
        <h1>
            I am a class component
        </h1>
        <Button props={"class button"}/>
      </div>
    )
  }
}
