import React, { Component } from 'react';
import ChoreDisplay from '../../components/chore_components/chore_display_components/chore_display';


export default class CurrentChores extends Component {
  render() {
    const chores = this.props.chores.map(chore => {
      
      return (
        <>

          <div className="box" onClick={() => this.props.openModal(`showChore ${chore._id}`)}>{chore.title} ${chore.amount} {chore.childId}</div>
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