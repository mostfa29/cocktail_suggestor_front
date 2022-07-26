import React from 'react';
import './App.css';
import {  ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme';
import logo from './assets/Logo.png';

import Home from './page/Home';
import Footer from './components/Footer_component/Footer';

import FullHeader from './components/Header_component/FullHeader';
import Product from './components/ProductPage_component/Product';
import Customicon from './components/icon_components/Customicon';



//TODO : store colorMode redux state inside of a useState and pass it as prop to the component
const theme = customTheme
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='app__container' >
        <Product
          title={"Kittencal's italien mETAL-in-mOUTH Meatballs"}
           cocktailImage={logo}
          titleDetails={[
            {
              'id':1,
              'icon': <Customicon PreparationIcon/>,
              'unitItem': '500',
              'unit':'Calories'
            },
            {
              'id':2,
              'icon': <Customicon KalorieIcon/>,
              'unitItem': '7800',
              'unit':'Kalories'
            },
           {  'id':3,
              'icon': <Customicon ReviewIcon/>,
              'unitItem': '800',
              'unit':'Kalories'
            },
          ]}
          ingredients={[
            {
              'id': 1,
              'size': { 'countity': '2', 'unit':'/3' },
            'ingredient':'large egg slightly beaten',
            'ingredientNameAndPlacement':['egg',2]
            },
        
          ]}
          steps={[
        {
          'id':1,
        'stepNummber':1,
        'content':'crash two egges'
          }
        ]}
        />
        
      {/* <FullHeader/>
        <Product
          name="sex on the beach"
          image={logo}
          description='this is a test description'
          ingrediant={[
            {
              'name':'Ice'
            },
              {
              'name':'1 1/2 oz. vodka'
            },
            {
              'name':'1 oz. peach schnapps'
            },
            {
              'name':'2 oz. orange juice'
            },
            {
              'name':'2 oz. cranberry juice'
            },
          ]}
          
          steps={[
            {
              'name':'Fill a glass with ice and add vodka, peach schnapps, and orange juice. Pour cranberry juice over. '
            },
          {
              'name':'Garnish with an orange wedge to serve. '
            },
          ]}
         />



        
        <Footer/>*/}
    </div>
  </ChakraProvider>
  );
}

export default App;
