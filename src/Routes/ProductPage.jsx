import { useEffect,useState,useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {Box,Image,Text,Spacer,Container,Center,Button,Flex} from "@chakra-ui/react";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { addToCart } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";

const getProductById = ({id})=>{
    return axios(`https://kirti123.herokuapp.com/data/${id}`)
   
}




export default function ProductPage(){
    const[State,setState] = useState({})
    const {state,dispatch} = useContext(CartContext)
    
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
       handleFetchData()
    },[id]) 

    const itemAlreadyExist = (id,cartItems) =>{
        if(cartItems.find((item)=>item.id === id)){
          return true
        }
        return false
      }


    const handleFetchData = ()=>{
       getProductById({id})
       .then((res)=>{
        setState(res.data)
       })
       
    }
    return(
        <Container>
        <Flex direction = {"row"}>
          
            <Center><Box w = "500px" mt = {10} ><Image width = "400px" src = {State.avatar} alt = "error"/></Box>
            </Center>
            <Box>
                <Center><Box ml = {20} mt = {20}><Text fontSize = {20}>Title : {State.Title}</Text></Box></Center>
                
                <Center><Text color = "green" fontWeight = {500} fontSize = {18}>☆{State.Rating}</Text></Center>
                
                <Center><Text fontWeight = {700} fontSize = {20}>Price : {State.Price}</Text></Center>
                <Center><Box><Button disabled={itemAlreadyExist(State.id,state)}
                    onClick={()=>dispatch(addToCart(State))}  ml = {10} w = "300px" mt = {5} bg = "black" color = "white"><LocalMallOutlinedIcon/>Add To Bag</Button></Box></Center>
                
            </Box>
           
        </Flex>
        </Container>
    )
}