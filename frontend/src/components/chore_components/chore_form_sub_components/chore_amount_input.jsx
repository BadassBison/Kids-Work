import React from 'react'

const ChoreAmount = ({ placeholder, value, onChange }) => {
    return(
        <div className="field has-addons has-addons-centered">
            <p className="control">
                <span className="select">
                    <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                    </select>
                </span>
            </p>
            <p className="control">
                <input 
                    type="number" 
                    className="input" 
                    min="0" 
                    step="0.01" 
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}/>
            </p>
        </div>
    )
}

export default ChoreAmount