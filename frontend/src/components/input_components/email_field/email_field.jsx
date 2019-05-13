import React from 'react'

const EmailField = (props) => {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="email" value={props.email} placeholder="Email" onChange={props.onChange} />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
            </div>
        </div>
    )
}

export default EmailField