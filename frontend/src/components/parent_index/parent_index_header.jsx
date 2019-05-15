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
        <div className="content" id="header-box">
          <h1 className="is-large">Hi Sue</h1>
          <div className="parent-index-header-buttons-container">
            <div className="field" id="create-chore-modal-button">
                <button className="button is-success is-rounded"
                    onClick={() => this.props.openModal({ modalType: 'create chore' })}>
                    Create Chore    
                </button>
            </div>
            <div className="field">
                <button className="button is-success is-rounded"
                    onClick={() => this.props.logout()}>
                    Logout    
                </button>
            </div>
          </div>
        </div>
        <table className="table is-striped is-hoverable">
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
            <tr>
              <td>Shawn</td>
              <td>$ 37</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className="is-selected">
              <td>Dennis</td>
              <td>$ 22</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Chris</td>
              <td>$ 10</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            {summerizedData}
          </tbody>
        </table>
      </>
    );
  }
}
