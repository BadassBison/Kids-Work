import React from 'react'


const ChoreDate = () => {
    const date = new Date()
    const minDate = date.setDate(date.getDate() - 1)
    const minMonth = date.setMonth(date.getMonth() - 1)
    const minYear = date.setYear(date.getFullYear() - 1)
    return (
        <div className="field has-addons-centered">
            <p className="control">
                <input type="date" className="input" min={`${minYear}-${minMonth}-${minDate}`}/>
            </p>
        </div>
    )
}

export default ChoreDate