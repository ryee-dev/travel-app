import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    
    a {
      &:hover {
        background-size: 100% 1px;
        cursor: pointer;
      }
    }
    
    hr {
      display: block;
      height: 1px;
      width: 100%;
      border: 0;
      border-top: 1px solid #e4e4e4;
      margin: 2em 0;
      padding: 0;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Routes />
      </div>
    );
  }
}

export default App;
