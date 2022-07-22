//support single and multiple props
export default function propIsComponent(...args){
   const arr= args
   let isComponent=true

   for (let i=0;i<arr.length;i++){
      isComponent=(typeof arr[i]=== 'object')
      if (isComponent===false)
        return false
      
   }
   
   //prop can be an element or a list of elements
   
   return isComponent
   
}