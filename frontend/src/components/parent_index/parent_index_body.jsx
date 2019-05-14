import React, { Component } from 'react';
import MainLinks from "../page_components/main_links_container";
import ChildLinks from "./child_links_container";
import CurrentChores from "./current_chores_container";


export default class ParentIndexBody extends Component {
  render() {
    return (
      <div>
        <MainLinks />
        <ChildLinks />
        <CurrentChores />
      </div>
    )
  }
}
