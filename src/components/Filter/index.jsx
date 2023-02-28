import React from "react";

import * as SC from './styles'

export const Filter = ({selectByFilterName}) => {
    return (
        <SC.Filter>
        <SC.Select onChange={(event) => selectByFilterName(event)}>
            <option value="0">By relevance</option>
            <option value="1">Sort by name</option>
        </SC.Select>
    </SC.Filter>
    )
}