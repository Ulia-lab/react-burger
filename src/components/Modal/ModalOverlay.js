import React from "react";
import modalStyles from "./modal.module.css";
import cn from 'classnames'
import PropTypes from 'prop-types';

function ModalOverlay({ ...props }) {
    return (
        <div onClick={props.onClick} className={cn(props.className, modalStyles.overlay)} />
    )
}

ModalOverlay.propTypes = {
    props: PropTypes.object,
};

export default ModalOverlay;