import React, { Component } from 'react';

export default class ChildLinks extends Component {

  render() {
    
      const buttons = this.props.childNames.map(child => {
        let filter = { field: "child", value: child.id };
        return (
          <button className="button is-rounded is-large"
          onClick={() => this.props.updateFilter(filter)}
          >
            {child.name}
          </button>
        )

      })
      const allButton = (
        <button className="button is-rounded is-large"
              onClick={() => this.props.updateFilter({ field: "child", value: null })}
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
