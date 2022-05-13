

import React, { Fragment, useState } from 'react';
import {
NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, 
Flex, Button,Badge } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

 
 
import { CardFruit, Title } from '../Styled';


export const Card = ({name, image,price}) => {
  
const [ quantity, setQuantity] = useState ("0")
const [ finalPrice, setPrice] = useState (`R$ ${price}`)
const toast = useToast()
const saveOnLS =(fruitName, object) => {
  if (quantity > 0) {  localStorage.setItem(fruitName, object)
    toast({
      title: 'Produto Adicionado.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  else {

    toast({
      title: 'Erro.',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }



}


  return (
  <Fragment>

     <CardFruit>
     
     
      <Flex  flexDirection={'column'} alignItems={'center'} border={'1px solid black'} borderRadius='8px' justifyContent={'space-around'}
            padding={'5px'} margin={'10px'}  width={'200px'} height={'200px'} minWidth='max-content'> 
       
       <Flex flexDirection={'row'}> 
       
       <Flex margin={'10px'} boxSize='120px'><img src= {image} alt=''/></Flex>
       
        
        <Flex flexDirection={'column'} margin={'10px'} gap="6px" alignItems='center'>
        <Title>{name}</Title>  R$={price}/unid.
        <Badge variant='solid' colorScheme='green'>Disponível</Badge>
        <NumberInput defaultValue={0} width="80px"  min={1} max={20} onChange={
          (e) => { setQuantity(e); setPrice(e * price)}}> 
                  
        <NumberInputField />
        <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
        </Flex>

        </Flex>
              <Flex>
<Button colorScheme='blue' padding={'10px'} height={"35px"} textsize={"8px"} size={"xs"} onClick={()=> saveOnLS (name, JSON.stringify({image,name,price,finalPrice,quantity}))}>
Adicionar ao carrinho</Button>
{/* <img  width={"20%"} alt=""src="https://img.icons8.com/fluency/48/000000/shopping-cart-loaded.png"/> */}
</Flex>

</Flex>


</CardFruit>
</Fragment>
  
  )
}

export default Card;
