import React, { Component } from 'react';
import './child.css';

export default class ChildIndexHeader extends Component {


  render() {

      const summerizedData = this.props.data.map(child => {
          return (
              <tr className="is-selected">
                  <td>$ {child.Balance}</td>
                  <td>{child.Open}</td>
                  <td>{child.Pending}</td>
                  <td>{child.Overdue}</td>
                  <td>{child.Completed}</td>
              </tr>
          )
      })
    return (
        <div className="child-header-container">
            <div className="content child-margin">
                <div className="parent-index-header-buttons-container">
                    <h1 className="is-large">
                        {this.props.currentUser.firstName}
                    </h1>
                </div>
            </div>
            <table className="table is-striped is-hoverable child-margin table-container">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>Open</th>
                            <th>Pending</th>
                            <th>Completed</th>
                            <th>Overdo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summerizedData}
                    </tbody>  
                </table>
          </div>
    )
  }
}
