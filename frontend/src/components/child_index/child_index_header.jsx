import React, { Component } from 'react'

export default class ChildIndexHeader extends Component {
  render() {
    return (
        <>
            <div className="content">
                <h1 className="is-large">
                    Hi Shawn
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
                        <tr className="is-selected">
                            <td>$ 37</td>
                            <td>2</td>
                            <td>1</td>
                            <td>102</td>
                            <td>0</td>
                        </tr>
                    </tbody>  
                </table>
          </>
    )
  }
}
