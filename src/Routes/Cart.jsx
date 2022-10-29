import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Spacer,
    Tab,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    useDisclosure,Image,Heading,SimpleGrid,Container,Flex
  } from "@chakra-ui/react";
  import React, { useContext, useEffect, useState } from "react";
  import { checkout, removeProduct } from "../Context/CartContext/action";
  import { CartContext } from "../Context/CartContext/CartContextProvider";
  import Line from "../Components/Line"
  
  const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const[rupees,setRupees] = useState(0)
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    const handleCheckout = ()=>{
      dispatch(checkout())
      setRupees(0)
      onClose()
      
    }

    useEffect(()=>{
        handleFetch()
    },[state])

    const handleFetch = ()=>{
      var rupe = 0 
      for(var i= 0;i<state.length;i++){
        rupe = rupe + state[i].Price
      }
      setRupees(rupe)
    }
  
                                                                                         
    return (
      <Box>
        {/* <Line/> */}
          {/* <Box>{rupees}</Box> */}
  
          {
            state.map((cartItem)=>{
              return (
               
               <Flex>
                <Spacer/>
                <Center>
                <Image mt ={30} width = "300px" src = {cartItem.avatar} alt = "error"/>
                </Center>
                <Spacer/>
                <Box border = "1px" borderColor = "gray.400" my = {7}  w= "400px"  boxShadow='lg' p='30' rounded='md' bg='white' h = "400px">
                <Heading mt = {7} fontSize="2xl"> Tittle : {cartItem.Title}</Heading>
                <Center>
                <Heading mt = {7} fontSize="xl">Price : {cartItem.Price}</Heading>
                </Center>
                <Center>
                <Heading mt = {7} fontSize="lg">Rating :☆ {cartItem.Rating}</Heading>
                </Center>
                <Center>
                  <Button onClick = {()=>dispatch(removeProduct(cartItem.id))}  mt = {7} bg = "black" color = "white">Remove</Button>
                </Center>
                </Box>
                <Spacer/>
               </Flex>
              )
            })
          }
          
         
        {/* <Center mt={{base:4,md:8}} mb="10px"> */}
          <Flex>
          <Image mb = {10} ml = {10} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCD2Zl_HHUlu7uFU5wijbTgcNZMMmunQXFg&usqp=CAU" alt = "error" />
        <Spacer/>
        <Center>
        <Button mr = {20}  colorScheme='red' onClick={onOpen}  >
        {`Place Order ₹ ${rupees}`}
        
        </Button>
        </Center>
        
        </Flex>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Place Order
              </AlertDialogHeader>
            
              <AlertDialogBody>
                {`Are you sure? You want to place this order of ₹ ${rupees}?`}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={handleCheckout} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
  
        {/* </Center> */}
        
      </Box>
      
    );
  };
  
  export default Cart;
  