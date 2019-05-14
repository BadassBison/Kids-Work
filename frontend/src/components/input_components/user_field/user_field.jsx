import React from 'react'

const UserField = () => {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input type="text" className="input" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </div>
        </div>
    )
}

export default UserField