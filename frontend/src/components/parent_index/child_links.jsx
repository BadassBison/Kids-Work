import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ChildLinks extends Component {
  render() {
    return (
      <div className="main-links">
        <Link to="/">All</Link>
        <Link to="/">Shawn</Link>
        <Link to="/">Dennis</Link>
        <Link to="/">Chris</Link>
      </div>
    )
  }
}
