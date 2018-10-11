import React from 'react';
import ReactDOM from 'react-dom';
import Previewer from './Previewer';
import styled from 'styled-components';

const StyledContainer = styled.div`
    float:left;
    align: left;
    width: 45%;
    height: 450px;
    max-height: auto;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 4px;
    background-color: white;
    resize: none;
    border-radius: 20px;
    padding: 0.25em;
    margin-left: 2em;
    align: center;
    text-align: center;
    font-family: arial;
    font-size: 20px;
`;

const StyledTitle = styled.h3`
    text-align: center;
    font-family: acme;
    font-size: 26px;
`;

const StyledTextArea = styled.textarea`
    width: 90%;
    height: 60%;
    background-color: black;
    color: white;
    font-size: 15.5px;
`;

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '# Welcome to the Markdown Previewer\n\n## The title was a header, this is a sub-header\n\n### **Ussage:**\n\n * Write markdown text in this textarea.\n * See the changes in the previewer\n\n### **Text attributes in number list:**\n\n1. *italic*,\n2. **bold**,\n3. **_italic-bold_**\n4. `monospace`\n5. ~~strikethrough~~ \n\n*[Checkout my gitHub for more projects](https://github.com/Lorenatacal)*'
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
                    <StyledTitle>Type your text in the box using the instructions below:</StyledTitle>
                    <StyledTextArea data-name="textarea" value={this.state.value} onChange={this.handleChange} />
                </StyledContainer>
                <Previewer input={this.state.value} />
            </div>
        )
    }
}

export default Text;