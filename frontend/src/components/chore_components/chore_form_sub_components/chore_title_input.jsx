import React from 'react'

const ChoreTitleInput = ({ placeholder }) => {
    return (
        <div className="field">
            <input className="input" type="text" placeholder={placeholder} />
        </div>
    )
}

export default ChoreTitleInput