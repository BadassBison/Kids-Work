import React from 'react'

const ChorePriority = ({ onClick }) => {
    return (
        <div className="field">
            <label className="checkbox">
                <input type="checkbox" 
                    onClick={onClick}/>
                High Priority
            </label>
        </div>
    )
}

export default ChorePriority