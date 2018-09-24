import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 2em;
    font-size: 1.5em;
    text-align: left;
`;

const StyledTextArea = styled.textarea`
    width: 40%;
    height: 350px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
`;

const StyledTitle = styled.h3`
    text-align: left;
    margin-left: 160px;
`;

class Text extends React.Component {
    render() {
        return (
            <StyledDiv>
                <StyledTitle>Text Area</StyledTitle>
                <StyledTextArea type="text" name="text" />
            </StyledDiv>
        )
    }
}

export default Text;