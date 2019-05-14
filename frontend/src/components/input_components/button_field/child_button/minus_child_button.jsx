import React from 'react'

const MinusChildButton = ({ onClick, disabled }) => {
    return (
        <button className="button is-light child-button" onClick={onClick} disabled={disabled}>
            <i className="fas fa-minus"></i>
        </button>
    )
}

export default MinusChildButton