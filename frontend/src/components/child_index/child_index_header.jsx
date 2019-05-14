import React, { Component } from 'react'

export default class ChildIndexHeader extends Component {
  render() {
    return (
       <section class="section">
            <div class="container">
                <h1 class="title">
                    Hi Shawn
                </h1>

                <table class="table">
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
                        <tr>
                            <td>$ 37</td>
                            <td>2</td>
                            <td>1</td>
                            <td>102</td>
                            <td>0</td>
                        </tr>
                    </tbody>  
                </table>
            </div>
        </section>
    )
  }
}
