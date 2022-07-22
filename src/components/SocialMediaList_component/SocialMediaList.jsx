import { Center, Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import checkIcons from './checkIcons'




//pass a list of social media icons
   //icon element must be component icon 
   //format <IconComponentName props(optinal) styles(optinal)/> 

// if passed icon prop is not correct skip the element and console.log the element

//default color is white in night mode and black in day mode

//global icon color customizable via "ic" prop

// checkIcons(){
//     if(typeof(this.props.showName) === 'function') {
//         //call this.props.showName(d);
//         return null;
//     }else{
//         return this.props.showName;
//     }    
// }


// ToDo: extend props.icons to accept images 

function SocialMediaList(props) {
    
    const iconList=props.icons
    const isIcons=checkIcons(iconList)

    
  return (
    <>
    
    <Flex gap={5} className='social_media_icons__container'>
    {iconList.map((icon) =>

      <Center w={props.w} h={props.h} >
        
        {icon }
        </Center>

    )}

    </Flex>
    
    </>
  )
}

export default SocialMediaList