import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
    float:left;
    align: left;
    width: 45%;
    height: 400px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 20px;
    padding: 0.25em;
    margin: 2em;
    margin-left: 25px;
    margin-right: 25px;
    align: center;
    text-align: center;
    font-family: arial;
`;

const StyledTitle = styled.h3`
    text-align: center;
`;

const StyledTextArea = styled.textarea`
    width: 80%;
    height: 70%;
`;

class Text extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledTitle>Text Area</StyledTitle>
                <StyledTextArea type="hidden" />
            </StyledContainer>
        )
    }
}

export default Text;