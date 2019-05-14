import React, { Component } from 'react';

export default class ChildLinks extends Component {
  render() {
    return (
      <div className="main-links level">
        <button className="button is-rounded is-large">All</button>
        <button className="button is-rounded is-large">Shawn</button>
        <button className="button is-rounded is-large">Dennis</button>
        <button className="button is-rounded is-large">Chris</button>
      </div>
    )
  }
}
