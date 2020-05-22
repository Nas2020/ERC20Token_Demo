<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React from "react";
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from "@drizzle/react-plugin";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from './LoadingContainer.js';
import TokenMetadata from './TokenMetadata.js';
import TokenWallet from './TokenWallet.js';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  return (
    <div className="container">
      <h1>ERC20 Token</h1>
      <DrizzleProvider drizzle={drizzle}>
        <LoadingContainer>
          <TokenMetadata />
          <TokenWallet />
        </LoadingContainer>
      </DrizzleProvider>
>>>>>>> featureA
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> featureA
