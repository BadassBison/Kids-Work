import React, { Component } from 'react';
import ParentIndexheader from './parent_index_header_container';
// import ParentIndexBody from './parent_index_body';
import MainLinks from "../page_components/main_links_container";
import ChildLinks from "./child_links_container";
import CurrentChores from "../page_components/current_chores_container";
import { Link } from 'react-router-dom';

export default class ParentIndexPage extends Component {
  

  componentDidMount() {
    this.props.fetchChores();
  }


  render() {
    return (
      <div>

        <section className="section">
          <div className="container">

          
          <div className="tile is-ancestor">
              <div className="tile is-vertical is-12">
                
                <div className="tile">
                  
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-info">
                      <ParentIndexheader />
                    </article>

                    <article className="tile is-child notification is-warning">
                      <MainLinks />
                      <ChildLinks />
                      <CurrentChores chores={this.props.chores}/>
                    </article>
                    
                    <article className="tile is-child notification is-primary">
                      <Link to="/parent/dashboard" id="dashboard-link">
                        <p className="title">Dashboard</p>
                      </Link>
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
