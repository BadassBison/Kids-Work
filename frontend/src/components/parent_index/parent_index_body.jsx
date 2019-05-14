import React, { Component } from 'react';
import MainLinks from "../page_components/main_links_container";
import ChildLinks from "./child_links_container";
import CurrentChores from "../page_components/current_chores_container";


export default class ParentIndexBody extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <MainLinks />
          <ChildLinks />
        </div>
        <CurrentChores />
      </div>
    )
  }
}
