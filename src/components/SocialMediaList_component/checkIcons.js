import propIsComponent from "../../common/prop_is_component";

export default function checkIcons(icons){
    
    if (Array.isArray(icons) )
    return propIsComponent(...icons)
    else
    console.log('Social media icons prop must be an array')


}