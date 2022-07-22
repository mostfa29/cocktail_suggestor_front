import React from 'react';
import './App.css';
// 1. Import the extendTheme function
import {  ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme';
import ToogleColorMode from './components/ToogleColorMode_component/ToogleColorMode';
import Header from './components/Header_component/Header';
import Home from './page/Home';


const theme = customTheme
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Header/>
    <Home/>
  </ChakraProvider>
  );
}

export default App;
