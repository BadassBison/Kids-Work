import React from 'react'

const PasswordField = ({ placeholder, className }) => {
    return (
        <div className="field">
            <div className="control has-icons-left ">
                <input type="password"/>
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>
            </div>
        </div>
    )
}

export default PasswordField