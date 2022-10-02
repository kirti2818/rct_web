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
    useDisclosure,Image
  } from "@chakra-ui/react";
  import React, { useContext, useEffect, useState } from "react";
  import { checkout, removeProduct } from "../Context/CartContext/action";
  import { CartContext } from "../Context/CartContext/CartContextProvider";
  
  const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    const handleCheckout = ()=>{
      dispatch(checkout())
      onClose()
    }
  
    return (
      <Box>
        <TableContainer mt={{ base: 10, sm: 10, md: 18, lg: 22 }}>
          <Table
            variant="simple"
            colorScheme="gray"
            size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
          >
            <TableCaption>No Exchange | No Refund</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize={{ base: "xs", md: "md" }}>Products</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Price</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Remove From Cart</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Avatar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                state.map((cartItem)=>(
                  <Tr key={cartItem.id}>
                     <Td fontSize={{base:"xs",md:"md"}}>
                     
                     <Image src =  {cartItem.avatar} alt = "error"/>
                    </Td>
                    <Td fontSize={{base:"xs",md:"md"}}>
                      {cartItem.Title}
                    </Td>
                    <Td fontSize={{base:"xs",md:"md"}}>
                      {cartItem.Price}
                    </Td>
                    <Td fontSize={{base:"xs",md:"md"}}>
                      <Button onClick={()=>dispatch(removeProduct(cartItem.id))} >Remove From Cart</Button>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
            <Tfoot>
              <Tr>
                <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
                <Th fontSize={{base:"xs",md:"md"}}>
                  {Math.round(state.reduce((a,c)=>a + c.price,0))}
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
  
        <Center mt={{base:4,md:8}} mb="10px">
        <Button colorScheme='red' onClick={onOpen} alignItems="center" justifyItems="center" >
          Place Order
        </Button>
  
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
                Are you sure? You want to place this order?
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
  
        </Center>
       
      </Box>
    );
  };
  
  export default Cart;
  