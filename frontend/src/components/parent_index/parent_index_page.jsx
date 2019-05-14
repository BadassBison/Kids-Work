import React, { Component } from 'react';
import ParentIndexheader from './parent_index_header_container'
import ParentIndexBody from './parent_index_body';


export default class ParentIndexPage extends Component {
  render() {
    return (
      <div>
                
        <section className="section">
          <div className="container">
            <ParentIndexheader />
            <ParentIndexBody />
          </div>
        </section> 
      </div>
    )
  }
}
