import React from 'react'
import AddChildButton from './add_child_button'
import MinusChildButton from './minus_child_button'

const ChildButtons = () => {
    return (
        <div className="field child-button-container">
            <AddChildButton />
            <MinusChildButton />
        </div>
    )
}

export default ChildButtons