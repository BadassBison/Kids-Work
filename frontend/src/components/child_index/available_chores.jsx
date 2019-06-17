import React, { Component } from 'react';

const AvailableChores = props => {
    const chores = props.chores.map((chore) => (
      <div class="box"><span>{chore.title}</span> <span>${chore.amount}</span></div>
    ));
    return (
      <div>
            <div class="box"><span>Wipe table</span> <span>$1.00</span></div>
            <div class="box"><span>dust fans</span> <span>$1.00</span></div>
            {chores}
      </div>
    )
}

export default AvailableChores;