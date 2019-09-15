import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Button } from 'antd';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const StyledButton = styled(Button)`
  font-weight: bold;
  color: #ddd;
`;
function App() {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <StyledButton type="primary" className="myButton">Hello world Button</StyledButton>
    </React.Fragment>
  );
}

export default App;
