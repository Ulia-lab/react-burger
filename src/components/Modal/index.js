import React from "react";
import ReactDOM from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import modalStyles from "./modal.module.css";
import cn from 'classnames'
import ModalOverlay from "./ModalOverlay.js";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

function Modal({ ...props }) {
    const [visible, setVisible] = React.useState(props.visible)
    React.useEffect(() => {
        setVisible(props.visible)
        document.addEventListener("keydown", closeByEscape);

    }, [props.visible])

    const handleCloseModal = () => {
        setVisible(false);
    }

    function closeByEscape(evt) {
        if (evt.key === "Escape") {
            handleCloseModal()
            document.removeEventListener("keydown", closeByEscape);
        }
    }
    return ReactDOM.createPortal(
        (<div className={visible ? modalStyles.visible : null}><ModalOverlay className={visible ? modalStyles.visibleOverlay : modalStyles.hidden} onClick={handleCloseModal} />
            <div className={cn(modalStyles.block, visible ? modalStyles.visible : modalStyles.hidden)}>
                <button onClick={handleCloseModal} className={cn(" mr-10", modalStyles.closeIcon, modalStyles.button)}><CloseIcon type="primary" /></button>
                <div className={cn(modalStyles.content, visible ? modalStyles.visible : modalStyles.hidden)}>{props.content}</div>
            </div>
        </div>
        ), modalRoot
    )

}

Modal.propTypes = {
    props: PropTypes.object,
}; 

export default Modal;
