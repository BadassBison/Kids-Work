import React from 'react'

const ChoreDescription = ({ placeholder}) => {
    return (
        <div class="field">
            <div class="control">
                <textarea className="textarea is-primary" placeholder={placeholder}></textarea>
            </div>
        </div>
    )
}

export default ChoreDescription