import React from 'react';
import './App.css';
import {  ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme';
import Header from './components/Header_component/Header';
import Home from './page/Home';
import SocialMediaList from './components/SocialMediaList_component/SocialMediaList';
import Footer from './components/Footer_component/Footer';



const theme = customTheme
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Header/>
    <Home/>
    <Footer/>
  </ChakraProvider>
  );
}

export default App;
