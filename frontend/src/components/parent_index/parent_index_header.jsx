import React, { Component } from 'react'
import './parent_index.css'

export default class ParentIndexHeader extends Component {
  render() {

    const summerizedData = this.props.data.map( child => {
        return (
            <tr>
                <td>{child.name}</td>
                <td>$ {child.Balance}</td>
                <td>{child.Open}</td>
                <td>{child.Pending}</td>
                <td>{child.Overdue}</td>
                <td>{child.Completed}</td>
            </tr>
        )
    })
    return (
      <>
        <div className="content child-margin" id="header-box">
          <h1 className="is-large">Hi {this.props.currentUser.firstName}</h1>
          <div className="parent-index-header-buttons-container">
            <div className="field" id="create-chore-modal-button">
                <button className="button is-success is-rounded"
                    onClick={() => this.props.openModal({ modalType: 'createChore' })}>
                    Create Chore    
                </button>
            </div>
          </div>
        </div>
        <table className="table is-striped is-hoverable child-margin">
          <thead>
            <tr>
              <th>Children</th>
              <th>Balance</th>
              <th>Open</th>
              <th>Pending</th>
              <th>Overdue</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {summerizedData}
          </tbody>
        </table>
      </>
    );
  }
}
