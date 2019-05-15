import React from 'react'


const ChoreDueDate = ({ value, onChange }) => {
    const date = new Date()
    const minDate = date.setDate(date.getDate() - 1)
    const minMonth = date.setMonth(date.getMonth() - 1)
    const minYear = date.setYear(date.getFullYear() - 1)
    return (
        <div className="field has-addons-centered">
            <p className="control">
                <input type="date" 
                    className="input" 
                    min={`${minYear}-${minMonth}-${minDate}`}
                    value={value}
                    onChange={onChange}/>
            </p>
        </div>
    )
}

export default ChoreDueDate