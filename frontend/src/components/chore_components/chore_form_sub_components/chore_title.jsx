import React from 'react'

const ChoreTitle = ({ title }) => {
    return (
        <div className="chore-title-container">
            <h3 className="title is-3">{title}</h3>
        </div>
    )
}

export default ChoreTitle