import React, { Component } from 'react';
import './page_components.css'


export default class CurrentChores extends Component {
 


  render() {

    const chores = this.props.chores.map(chore => {
      let firstName;
      if (chore.status === "ASSIGNED") {
        firstName = this.props.children[chore.childId].firstName;
      } else {
        firstName = "";
      }
      return (
        <>
          <div className="box" onClick={() => this.props.openModal({modalType: `showChore ${chore._id}`})}>{chore.title} ${chore.amount} {firstName}</div>
        </>
      )
    })

    return (
        <div>
          {chores}
        </div>  
    )
  }
}