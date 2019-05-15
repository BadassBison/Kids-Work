import React from 'react';
import './modal.css';
import LoginFormContainer from '../session/parent/login_form_container';
import SignupFormContainer from '../session/parent/signup_form_container';
import CreateChoreFormContainer from '../chore_components/chore_input_components/create_chore_form_container'

const Modal = (props) => {
    if (!props.modal) {
        return null;
    }
    
    let component;
    switch (props.modal.modalType) {
        case "signup":
            component = <SignupFormContainer />;
            break;
        case "login":
            component = <LoginFormContainer />;
            break;
        case "create chore":
            component = <CreateChoreFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;
