import React from 'react'

const PasswordField = (props) => {
    return (
        <div className="field">
            <div className="control has-icons-left ">
                <input className="input" type="password" value={props.password} placeholder={props.passwordType} />
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>
            </div>
        </div>
    )
}

export default PasswordField