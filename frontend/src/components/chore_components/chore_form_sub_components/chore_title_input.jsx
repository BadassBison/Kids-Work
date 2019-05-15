import React from 'react'

const ChoreTitleInput = ({ placeholder, value, onChange }) => {
    return (
        <div className="field">
            <input className="input" type="text" placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default ChoreTitleInput