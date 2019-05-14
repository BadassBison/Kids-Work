import React, { Component } from 'react';

export default class CurrentChores extends Component {
  render() {
    return (
        <div class="container">
            <section>
                <div class="box"><span>Dishes</span> <span>$1.00</span></div>
                <div class="box"><span>Clean Room</span> <span>$1.00</span></div>
                <div class="box"><span>Sweep Floor</span> <span>$1.00</span></div>
                <div class="box"><span>Walk Dog</span> <span>$1.00</span></div>  
            </section>  
        </div>
    )
  }
}
