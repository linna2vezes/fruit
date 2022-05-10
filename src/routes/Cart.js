import React from 'react';
import { CardBuy } from '../components/CardBuy';
import { Button } from '@chakra-ui/react';
import { ContainerFruits , TitleSecond} from "../Styled";


const Cart = () => {

  const selectCart = (key) => JSON.parse(localStorage.getItem(key));
  const keys = Object.keys(localStorage);
  console.log(keys);
  const listCart = keys.map((el) => selectCart(el));
  console.log(listCart);
  // const filterCart = list.filter((el) => el)
    

 return (
        <div>
         <center>
          
         <TitleSecond>Veja seu carrinho de compras</TitleSecond>
         <ContainerFruits>
          
         {listCart.map((el) => <CardBuy image={el.image} name={el.name} price={el.price} quantity={el.quantity} finalprice={el.finalprice}/>)}
         </ContainerFruits>
         <Button colorScheme='blue' onClick={()=> { 
  // saveOnLS (name, JSON.stringify({finalPrice,quantityFinal}))
  
}}>
Finalizar Compra</Button>

</center> 
        </div>
        
  )
};

export default Cart;