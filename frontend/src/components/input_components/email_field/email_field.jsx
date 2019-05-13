import React from 'react'

const EmailField = (props) => {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="email" value={props.email} placeholder="Email" />
                <span className="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>
    )
}

export default EmailField