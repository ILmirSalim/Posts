import React from "react";
import * as SC from './styles'

export const Link = ({ simple = true, children, ...props }) => <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
