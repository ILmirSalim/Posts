import React from "react";
import { Input } from "../ui-components/Input";
import * as SC from './styles'

export const Filter = ({ selectByFilterName, filterByInputValue }) => {
    return (
        <SC.Filter>
            <SC.Select onChange={(event) => selectByFilterName(event)}>
                <option value="0">By relevance</option>
                <option value="1">Sort by name</option>
            </SC.Select>
            <SC.Wrapper>
                <Input onChange={(event) => filterByInputValue(event)}
                    placeholder='Filter by name'
                />
            </SC.Wrapper>
        </SC.Filter>
    )
}