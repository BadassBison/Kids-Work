import React from 'react'

const UserField = (props) => {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="text" value={props.handle} placeholder="Family name"></input>
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </div>
        </div>
    )
}

export default UserField