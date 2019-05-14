import React from 'react'

const AddChildButton = ({ onClick }) => {
    return (        
        <button className="button is-light child-button" onClick={onClick}>
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddChildButton