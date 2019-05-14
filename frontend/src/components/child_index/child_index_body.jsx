import React, { Component } from 'react';
import MainLinks from "../page_components/main_links_container";
import CurrentChores from "../page_components/current_chores_container";
import AvailableChores from "./available_chores";

export default class ChildIndexBody extends Component {
  render() {
    return (
      <div>
        <MainLinks />
        <h2>Shawn's Chores</h2>
        <CurrentChores /><br>

        <h2>Available Chores</h2>
        <AvailableChores />
      </div>
    )
  }
}
