import React from 'react';
import styles from './modal.module.css';

function Modal(props) {
    const closeModal = () => {
        props.setModalVisibilityCreator(false);
    }

    return(
        <div className={ styles.modal }>
            { props.textModal }
            <br/>
            <button onClick={ closeModal }>close</button>
        </div>
    );
}

export default Modal;