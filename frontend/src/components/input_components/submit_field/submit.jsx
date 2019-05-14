import React from 'react'

const SubmitField = ({ value }) => {

    return (
        <div className="field">
            <div className="control">
                <input type="submit" className="button is-info is-fullwidth" value={value}/>
            </div>
        </div>
    )
}

export default SubmitField