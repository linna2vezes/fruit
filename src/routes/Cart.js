import React, { useEffect, useState } from 'react';
import {  Image, Modal, ModalBody, ModalCloseButton, ModalContent, 
 ModalFooter, ModalHeader, ModalOverlay , useDisclosure, Box } from "@chakra-ui/react"
import { CardBuy } from '../components/CardBuy';
import { Button } from '@chakra-ui/react';
import { ContainerFruits , TitleSecond} from "../Styled";
import { Link as ReachLink } from 'react-router-dom'
import vazio from '../image/vazio.png'



const Cart = ({name}) => {
  
  const [ listCart, setListCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ finalPayment , setFinalPayment] = useState(0)
  const [ upDateItem, setupDateItem] = useState (false)

  const clearOnLS =(key) => localStorage.clear(key)
 
  


  useEffect (() => {
  const creatList =() => {
  const selectCart = (key) => JSON.parse(localStorage.getItem(key));
  const keys = Object.keys(localStorage);
  setListCart (keys.map((el) => selectCart(el)));
  setupDateItem (false);
  setFinalPayment(listCart.reduce((acc, el) => { acc += +el.finalPrice
         return acc } , 0 ))
    }
    creatList();
  },[upDateItem, finalPayment, listCart])


  
  // +el.finalPrice o mais na frente converte em numero de forma forçada
 console.log(finalPayment,listCart)
   if (localStorage.length < 1) return <div><center> <TitleSecond>Não há compras na sua lista</TitleSecond> <Image  marginBottom="30px" height={"150px"} src= {vazio}   alt=''  /></center></div>;  

 return (
        <div>
         <center>
         <TitleSecond pt="60px" fontsize="30px">O valor total da sua compra é de R$ {finalPayment} </TitleSecond>
         
         <TitleSecond>Confira os itens adicionados ao seu carrinho de compras antes de finalizar o pedido:</TitleSecond>
         
         <ContainerFruits>
          
         {listCart.map((el) => <CardBuy
          image={el.image} 
          name={el.name} 
          price={el.price} 
         quantity={el.quantity} 
         finalprice={el.finalprice} 
         setupDateItem={setupDateItem} />)}
         
         </ContainerFruits>
         <Button colorScheme='blue' onClick={onOpen} > Finalizar Compra</Button>
         
          <Modal isOpen={isOpen} onClose={onClose} size={'xs'} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Forma de pagamento </ModalHeader>
                    <ModalHeader textAlign="center">Valor total é R${finalPayment},00 </ModalHeader>

                    <ModalCloseButton />
                    <ModalBody display={'flex'} alignItems='center' justifyContent={'space-around'}margin="0" gap={10}>
                     
                     <Box
  as='button'
  height='60px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='8px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  <img width="50px"  alt='' src="https://img.icons8.com/color/60/000000/boleto-bankario.png"/>
</Box>
<Box
  as='button'
  height='60px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='8px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  <img width="50px"  alt='' src="https://img.icons8.com/emoji/48/000000/credit-card-emoji.png"/>
</Box>
                    
              
                   
                    </ModalBody>
                    <ModalFooter>
                           <Button colorScheme='green' as={ReachLink} to='/' size='md' onClick={() => {
                        onClose()
                        clearOnLS (name)
                       
                    }}>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

</center> 
        </div>
        
  )
};

export default Cart;