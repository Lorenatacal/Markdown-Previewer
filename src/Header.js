import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 50px;
    padding: 20px;
    color: white;
    margin-bottom: 4em;
`
const StyledTitle = styled.h1`
    font-size: 35px;
    color: black;
`

const Header = function () {
    return (
        <StyledHeader>
        <StyledTitle>Markdown Previewer</StyledTitle>
      </StyledHeader>
    )
}

export default Header;