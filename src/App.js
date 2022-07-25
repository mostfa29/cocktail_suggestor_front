import React from 'react';
import './App.css';
import {  ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme';

import Home from './page/Home';
import Footer from './components/Footer_component/Footer';

import FullHeader from './components/Header_component/FullHeader';


//TODO : store colorMode redux state inside of a useState and pass it as prop to the component
const theme = customTheme
function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className='app__container' >
       <FullHeader/>
       <Home/>



        
   <Footer/>
    </div>
  </ChakraProvider>
  );
}

export default App;
