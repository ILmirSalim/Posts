import React from "react";
import * as SC from './styles'

export const Modal = ({ children, ...rest }) => {
    return <SC.Modal {...rest}>{children}</SC.Modal>
}