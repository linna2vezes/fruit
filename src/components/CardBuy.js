
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, Flex
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { CardFruit, Title } from '../Styled';




export const CardBuy = ({name, image, price , quantity, setupDateItem}) => {

// const {name, image, price , quantity, setupDateItem} = props

const saveOnLS =(name, object) => localStorage.setItem(name, object)

const removeOnLS =(key) => localStorage.removeItem(key)
const change = (e)=> {
  setupDateItem (true);
  saveOnLS( name, JSON.stringify({image, name, price, finalPrice: (+e*price), quantity:e}))
    // +el.finalPrice o mais na frente converte em numero de forma forçada

  console.log(price,+e);}
  



return (
  
        <div>
          <CardFruit>
          <Flex  flexDirection={'column'} alignItems={'center'} border={'1px solid black'} borderRadius='8px' justifyContent={'space-around'}
            padding={'5px'} margin={'10px'}  width={'200px'} height={'200px'} minWidth='max-content'> 
              <Flex flexDirection={'row'}> <Flex margin={'10px'} boxSize='120px'><img src= {image} alt=''/></Flex>
                 <Flex flexDirection={'column'} margin={'10px'} gap="6px" alignItems='center'>
       
        <Title>{name}</Title>  R$={price}/unid.
           
            <NumberInput  onChange={(e) => { 
              change(e) }} defaultValue={quantity}  width="80px"  min={1} max={20} >
             
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
   <Button colorScheme='trasparent' width="70px" onClick={()=> { 
  removeOnLS (name);
  setupDateItem(true)}}>
<img alt="" src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-delete-cyber-monday-xnimrodx-blue-xnimrodx.png"/>

</Button>
</Flex>
 </Flex>
        
</CardFruit>  
    
    </div>
  )
}
