import React from "react";
import modalStyles from "./modal.module.css";
import cn from 'classnames'
import { ModalOverlayProps } from "./interfaces";

function ModalOverlay({ onClick, className }: ModalOverlayProps) {
    return (
        <div onClick={onClick} className={cn(className, modalStyles.overlay)} />
    )
}

export default ModalOverlay;