import React, { useEffect, useState } from 'react';
import {  Image, Modal, ModalBody, ModalCloseButton, ModalContent, 
 ModalFooter, ModalHeader, ModalOverlay , useDisclosure, Flex, ListItem, UnorderedList} from "@chakra-ui/react"
import { CardBuy } from '../components/CardBuy';
import { Button } from '@chakra-ui/react';
import { ContainerFruits , TitleSecond} from "../Styled";
import { Link as ReachLink } from 'react-router-dom'
import vazio from '../image/vazio.png'



const Cart = () => {
  
  const [ listCart, setListCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ finalPayment , setFinalPayment] = useState(0)
  const [ upDateItem, setupDateItem] = useState (false)

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
                    <ModalHeader>Valor total: R${finalPayment}  </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} alignItems='center' justifyContent={'space-around'} gap={5}>
                     Escolha a forma para realizar a transição:
                     <Flex as={UnorderedList} justifyContent='space-around' margin="0" gap="10px">
                    <ListItem listStyleType={'none'} ><Button as={ReachLink} to='/' width={"80px"} height={"80px"} ><img width="80px"  alt='' src="https://img.icons8.com/color/60/000000/boleto-bankario.png"/></Button> </ListItem>
                    <ListItem listStyleType={'none'} ><Button as={ReachLink} to='/' width={"80px"} height={"80px"} ><img width="80px"  alt='' src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/60/000000/external-payment-bill-and-payment-method-xnimrodx-lineal-color-xnimrodx-4.png"/></Button> 

                    </ListItem>
                </Flex>
                   
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>

</center> 
        </div>
        
  )
};

export default Cart;