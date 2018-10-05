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
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
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
            value: '# This is a heading\n## This is a Sub-heading\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n**Ussage:**\n  * Write markdown text in this textarea.\n * See the changes in the previewer\n\n **Numbered list:**\n  1. Item1\n2. Item2\n\n *[Checkout my gitHub for more projects](https://github.com/Lorenatacal)*'
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
            <div>
                <StyledContainer>
                    <StyledTitle>Text Area</StyledTitle>
                    <StyledTextArea value={this.state.value} onChange={this.handleChange} />
                </StyledContainer>
                <Previewer input={this.state.value} />
            </div>
        )
    }
}

export default Text;