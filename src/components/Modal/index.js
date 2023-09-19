import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import modalStyles from "./modal.module.css";
import cn from 'classnames'
import ModalOverlay from "./ModalOverlay.js";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

function Modal({ ...props }) {
    useEffect(() => {
        function closeByEscape(evt) {
            
            if (evt.key === "Escape") {
                props.closeModal();
            }
        }
        document.addEventListener("keydown", closeByEscape);
        return () => {  
            document.removeEventListener("keydown", closeByEscape);
        };
    }, []);

    return ReactDOM.createPortal(
        (<div className={modalStyles.visible}><ModalOverlay className={modalStyles.visibleOverlay} onClick={props.closeModal} />
            <div className={cn(modalStyles.block, modalStyles.visible)}>
                <button onClick={props.closeModal} className={cn(" mr-10", modalStyles.closeIcon)}><CloseIcon type="primary" /></button>
                <div className={cn(modalStyles.content, modalStyles.visible)}>{props.content}</div>
            </div>
        </div>
        ), modalRoot
    )
}

Modal.propTypes = {
    props: PropTypes.object,
};

export default Modal;
