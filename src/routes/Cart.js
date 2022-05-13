import React, { Fragment, useEffect, useState } from 'react';
import {  Image, Modal, ModalBody, ModalCloseButton, ModalContent, 
 ModalFooter, ModalHeader, ModalOverlay , useDisclosure, Box, AlertIcon, AlertTitle, AlertDescription, Alert } from "@chakra-ui/react"
import { CardBuy } from '../components/CardBuy';
import { Button } from '@chakra-ui/react';
import { ContainerFruits , Paragraf, TitleSecond, Center} from "../Styled";
// import { Link as ReachLink } from 'react-router-dom'
import vazio from '../image/vazio.png'



const Cart = ({name}) => {
  
  const [ listCart, setListCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ finalPayment , setFinalPayment] = useState(0)
  const [ upDateItem, setupDateItem] = useState (false)
  const [ alertVisible, setAlertVisible] = useState(false)

  const clearOnLS =(key) => { 
    localStorage.clear(key) 
    // alert ("compra finalizada")
  }

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[upDateItem])

  useEffect (() => {
    const creatPayment =() => {
   
    setFinalPayment(listCart.reduce((acc, el) => { acc += +el.finalPrice
           return acc } , 0 ))
      }
      creatPayment();
    },[finalPayment, listCart])
    
  

  
  // +el.finalPrice o mais na frente converte em numero de forma forçada
 console.log(finalPayment,listCart)
   if (localStorage.length < 1) return <div>
       { alertVisible? <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justify='center'
  textAlign='center'
  height='150px'
  
 
>
  
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Pagamento realizado com sucesso!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Agradecemos a preferência!
  </AlertDescription>
</Alert>:""}

<center> <TitleSecond>Não há compras na sua lista</TitleSecond> <Image  marginBottom="30px" height={"150px"} src= {vazio}   alt=''  /></center></div>;  

 return (
  <Fragment>

         
    
         <TitleSecond pt="60px" fontsize="30px">O valor total da sua compra é de R$ {finalPayment} </TitleSecond>
         
         <Paragraf>Confira os itens adicionados antes de finalizar o pedido:</Paragraf>
         
         <ContainerFruits>
          
         {listCart.map((el) => <CardBuy
          image={el.image} 
          name={el.name} 
          price={el.price} 
         quantity={el.quantity} 
         finalprice={el.finalprice} 
         setupDateItem={setupDateItem} />)}
         
         </ContainerFruits>
         <Center>
         <Button colorScheme='blue' onClick={onOpen} > Finalizar Compra</Button>
         </Center>
         
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
                    <Center>
                           <Button colorScheme='green'  size='md' onClick={() => {
                        onClose()
                        clearOnLS (name)
                        setAlertVisible (true) 

                       
                    }}>Confirmar</Button> </Center>
                   

                    </ModalFooter>
                </ModalContent>
            </Modal>


        </Fragment>
        
  )
};

export default Cart;