import React from 'react';
import ReactDOM from 'react-dom';
import Previewer from './Previewer';
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
    margin: 6em;
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
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <StyledContainer>
                <StyledTitle>Text Area</StyledTitle>
                <StyledTextArea onChange={this.handleChange} />
            </StyledContainer>
        )
    }
}

export default Text;