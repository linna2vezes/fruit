
import React, { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, Flex
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { CardFruit, Title, TitleSecond } from '../Styled';


export const CardBuy = ({name, image,price, quantity}) => {

const [ quantityFinal, setQuantityFinal] = useState (quantity)
const [ finalPrice, setPrice] = useState (`R$ ${price}`)
const saveOnLS =(fruitName, object) => localStorage.setItem(fruitName, object)
const removeOnLS =(fruitName, object) => localStorage.removeItem(fruitName, object)

if (localStorage.length < 1) return <div><center> <TitleSecond>Não há compras na lista</TitleSecond></center></div>;
return (
  
        <div>
          <CardFruit>
          <Flex  flexDirection={'column'} alignItems={'center'} border={'1px solid black'} borderRadius='8px' justifyContent={'space-around'}
            padding={'5px'} margin={'10px'}  width={'200px'} height={'200px'} minWidth='max-content'> 
       
       <Flex flexDirection={'row'}> <Flex margin={'10px'} boxSize='120px'><img src= {image} alt=''/></Flex>
       
        
        <Flex flexDirection={'column'} margin={'10px'} gap="6px" alignItems='center'>
        <Title>{name}</Title>  R$={price}/unid.
            <NumberInput defaultValue={quantity} width="90px" precision={1} min={1} max={20} onChange={
              (e) => { setQuantityFinal(e); setPrice(e * price)}}>
             
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  <Flex flexDirection={'row'}  padding={'5px'} margin={'10px'}  > 
  </Flex>
  </Flex>
  </Flex>
  <Flex flexDirection={'row'}>
  <Button colorScheme='trasparent' height="40px" width="70px" onClick={()=> { 
  saveOnLS (name, JSON.stringify({image, name, price, finalPrice,quantityFinal}))
  
}}>
<img alt=''src="https://img.icons8.com/fluency/40/000000/ok.png"/></Button>
 <Button colorScheme='trasparent' width="70px" onClick={()=> { 
  removeOnLS (name, JSON.stringify({image, name, price, finalPrice,quantityFinal}))
  
}}>
<img alt="" src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-delete-cyber-monday-xnimrodx-blue-xnimrodx.png"/>

</Button>
</Flex>
 </Flex>
        
</CardFruit>  
    
    </div>
  )
}
