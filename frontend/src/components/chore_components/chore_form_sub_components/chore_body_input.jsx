import React from 'react'

const ChoreDescription = ({ placeholder, value, onChange }) => {
    return (
        <div className="field">
            <div className="control">
                <textarea 
                    className="textarea is-primary" 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}></textarea>
            </div>
        </div>
    )
}

export default ChoreDescription