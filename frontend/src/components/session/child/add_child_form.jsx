import React from 'react'
import UserField from '../../input_components/name_field/name_field'
import PasswordField from '../../input_components/password_field/password_field';

const ChildInputs = (props) => {
    return (
        props.children.map((val, idx) => {
            let childId = `child-${idx}`, passwordId = `password-${idx}`, confirmPasswordId = `confirmPassword-${idx}`
            return (
                <div keys={idx}>
                    <UserField name={childId} data-id={idx} id={childId} value={props.children[idx].name} className="name" />
                    <PasswordField name={passwordId} data-id={idx} id={passwordId} value={props.children[idx].childPassword} className="password" />
                    <PasswordField name={confirmPasswordId} data-id={idx} value={props.children[idx].childConfirmPassword} className="confirm-password" />
                </div>
            )
        })
    ) 
}

export default ChildInputs