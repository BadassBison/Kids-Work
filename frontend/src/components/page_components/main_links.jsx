import React, { Component } from 'react';

export default class MainLinks extends Component {
  render() {
    return (
      <div className="main-links level">
        <button className="button is-rounded is-large">Open</button>
        <button className="button is-rounded is-large">Pending</button>
        <button className="button is-rounded is-large">Completed</button>
      </div>
    )
  }
}
