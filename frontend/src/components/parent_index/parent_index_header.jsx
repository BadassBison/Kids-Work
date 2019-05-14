import React, { Component } from 'react'

export default class ParentIndexHeader extends Component {
  render() {
    return (  
        <>
        <div className="content">
            <h1 className="is-large">
                Hi Sue
            </h1>
        </div>
        <table className="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Children</th>
                    <th>Balance</th>
                    <th>Open</th>
                    <th>Pending</th>
                    <th>Overdo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shawn</td>
                    <td>$ 37</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr className="is-selected">
                    <td>Dennis</td>
                    <td>$ 22</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Chris</td>
                    <td>$ 10</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </tbody>  
        </table>
        </>
    )
  }
}
