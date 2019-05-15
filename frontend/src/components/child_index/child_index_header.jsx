import React, { Component } from 'react'

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
        <>
            <div className="content">
                <h1 className="is-large">
                    {this.props.currentUser.firstName}
                </h1>
            </div>
            <table className="table is-striped is-hoverable">
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
          </>
    )
  }
}
