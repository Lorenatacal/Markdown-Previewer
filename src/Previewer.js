import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';


const StyledContainer = styled.div`
float:right;
align:left;
width: 45%;
min-height: 450px;
height: auto;
box-sizing: border-box;
border: 1px solid #ccc;
background-color: white;
resize: none;
border-radius: 20px;
margin-right: 2em;
align: center;
text-align: center;
font-family: arial;
`;


const StyledReactMarkdown = styled(ReactMarkdown)`
width: 98%;
height: 70%;
overflow-wrap: break-word;
font-family: acme;
font-size: 17px;
`;

const Previewer = props => {
    return (
        <StyledContainer>
            <StyledReactMarkdown source={props.input} />
        </StyledContainer>
    )
}

export default Previewer;