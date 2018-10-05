import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';


const StyledContainer = styled.div`
float:right;
align:left;
width: 45%;
height: auto;
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

const StyledReactMarkdown = styled(ReactMarkdown)`
width: 98%;
height: 70%;
overflow-wrap: break-word;
`;

const Previewer = props => {
    return (
        <StyledContainer>
            <StyledTitle>Previewer</StyledTitle>
            <StyledReactMarkdown source={props.input} />
        </StyledContainer>
    )
}

export default Previewer;