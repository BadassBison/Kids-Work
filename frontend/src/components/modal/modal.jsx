import React from 'react';
import SignupModal from './signup_modal';
import LoginModal from './login_modal';
import './modal.css';

const Modal = (props) => {
    if (!props.modal) {
        return null;
    }

    let component;
    switch (props.modal.modalType) {
        case "signup":
            component = <SignupModal />;
            break;
        case "login":
            component = <LoginModal />;
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
