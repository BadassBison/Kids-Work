import React, { Component } from 'react';

export default class CurrentChores extends Component {
  render() {
    return (
        <div>
          <div className="box"><span>Wipe table</span> <span>$1.00</span></div>
          <div className="box"><span>Dishes</span> <span>$1.00</span></div>
          <div className="box"><span>Clean Room</span> <span>$1.00</span></div>
          <div className="box"><span>Sweep Floor</span> <span>$1.00</span></div>
          <div className="box"><span>Walk Dog</span> <span>$1.00</span></div>  
        </div>  
    )
  }
}