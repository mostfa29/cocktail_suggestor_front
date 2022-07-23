import React from 'react';
import './App.css';
import {  ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme';

import Home from './page/Home';
import Footer from './components/Footer_component/Footer';
import Search from './components/Search_component/Search';
import Header from './components/Header_component/MainHeader_component/Header';
import ToogleColorMode from './components/ToogleColorMode_component/ToogleColorMode';



const theme = customTheme
function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className='app__container' >
       {/* <Header /> */}
        <ToogleColorMode/>
        <Search />
        
    {/* <Footer/> */}
    </div>
  </ChakraProvider>
  );
}

export default App;
