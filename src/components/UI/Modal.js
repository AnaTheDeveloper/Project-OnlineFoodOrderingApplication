import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

//Use portal for backdrop and model overlay.
const Backdrop = (props) => {

    return (
        <div className={styles.backdrop}></div>
    );

};

const ModalOverlay = (props) => {

    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )

};

//Gets the id="overlays from the public -> index.html file"
const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}           
        </React.Fragment>
    );
};
export default Modal;