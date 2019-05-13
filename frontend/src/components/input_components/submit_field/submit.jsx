import React from 'react'

const SubmitField = (props) => {

    return (
        <div className="field">
            <div className="control">
                <button className="button is-success btn-stretched">{props.formType}</button>
            </div>
        </div>
    )
}

export default SubmitField