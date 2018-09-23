import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledTextArea = styled.div`
    margin: 2em;
    font-size: 1.5em;
    text-align: left;
`;

const StyledInput = styled.input`
    width: 600px;
    height: 600px;
`;

class Textarea extends React.Component {
    render() {
        return (
            <StyledTextArea>
                <h3>Text Area</h3>
                <label>
                <StyledInput type="text" name="text" />
                </label>
            </StyledTextArea>
        )
    }
}

export default Textarea;