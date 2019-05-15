import React, { Component } from 'react';

export default class MainLinks extends Component {


  render() {

    const buttons = this.props.choreTypes.map(choreType => {
      let filter = { field: "chore_status", value: choreType };
      return (
        <button className="button is-rounded is-large"
          onClick={() => this.props.updateFilter(filter)}
        >
          {choreType}
        </button>
      )
    })

    const allButton = (
      <button className="button is-rounded is-large"
        onClick={() => this.props.updateFilter({ field: "chore_status", value: null })}
      >
        All
        </button>
    )
    buttons.unshift(allButton)

    return (
      <div className="main-links level">
        {buttons}
      </div>
    )
  }
}
