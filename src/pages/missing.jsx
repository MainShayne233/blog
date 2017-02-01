import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Missing extends Component {

  render() {
    return (
      <div>
        <p>i haven't written about that yet</p>
        <Link to="/">try the homepage</Link>
        <p> there is def some stuff there</p>
      </div>
    )
  }
}
