import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #222;
    height: 50px;
    padding: 20px;
    color: white;
`
const StyledTitle = styled.h1`
    font-size: 2em;
`

const Header = function () {
    return (
        <StyledHeader>
        <StyledTitle>Markdown Previewer</StyledTitle>
      </StyledHeader>
    )
}

export default Header;