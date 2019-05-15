import React, { Component } from 'react';
import ParentIndexheader from './parent_index_header_container';
// import ParentIndexBody from './parent_index_body';
import MainLinks from "../page_components/main_links_container";
import ChildLinks from "./child_links_container";
import CurrentChores from "../page_components/current_chores_container";


export default class ParentIndexPage extends Component {
  

  componentDidMount() {
    this.props.fetchChores();
  }

  render() {
    return (
      <div>

        <section class="section">
          <div class="container">

          
          <div class="tile is-ancestor">
              <div class="tile is-vertical is-12">
                
                <div class="tile">
                  
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-info">
                      <ParentIndexheader />
                    </article>

                    <article class="tile is-child notification is-warning">
                      <MainLinks />
                      <ChildLinks />
                      <CurrentChores />
                    </article>
                    
                    <article class="tile is-child notification is-primary">
                      <p class="title">Dashboard</p>
                    </article>
                  </div>

                </div>
              </div>

              {/* <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                  <div class="content">
                    <p class="title">Available Chores</p>
                    <h2>Container</h2>
                  </div>
                </article>
              </div>*/}
            </div> 
          </div>
        </section>





      </div>
    )
  }
}
