import React, { Component } from 'react'
import ParentIndexheader from './parent_index_header_container'
import ParentIndexBody from './parent_index_body_container'


export default class ParentIndexPage extends Component {
  render() {
    return (
      <div>
        <ParentIndexheader />
        <ParentIndexBody />
      </div>
    )
  }
}
