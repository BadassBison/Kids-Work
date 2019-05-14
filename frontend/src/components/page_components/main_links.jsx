import React, { Component } from 'react';
import { Link } from 'react-router';


export default class MainLinks extends Component {
  render() {
    return (
      <div className="main-links">
        <Link to="/">Open</Link>
        <Link to="/">Pending</Link>
        <Link to="/">Completed</Link>
      </div>
    )
  }
}
