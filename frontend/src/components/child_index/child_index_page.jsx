import React, { Component } from 'react'
import ChildIndexHeader from './child_index_header_container';
import ChildIndexBody from './child_index_body_container';
import AvailableChores from "./available_chores";
import CurrentChores from "../page_components/current_chores_container";
import MainLinks from "../page_components/main_links_container";


export default class ChildIndexPage extends Component {
  render() {
    return (
      <div>
        <section class="section">
          <div class="container">


          <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                
                <div class="tile">
                  
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                      <ChildIndexHeader />
                    </article>

                    <article class="tile is-child notification is-warning">
                      <MainLinks />
                      <CurrentChores />
                    </article>
                    
                    <article class="tile is-child notification is-info">
                      <p class="title">Dashboard</p>
                    </article>
                  </div>

                </div>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                  <div class="content">
                    <p class="title">Available Chores</p>
                    <AvailableChores />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
