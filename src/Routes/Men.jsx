import { useEffect } from "react"
import axios from "axios";
import {useContext} from "react"
import {productsuccess,productfailure} from "../Context/ProductsContext/actionCreator"
import { ProductContext } from "../Context/ProductsContext/ProductContext"
import {SimpleGrid,Box,Image,Heading,Text,Flex,Spacer,Container,Button,Center} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Line from "../Components/Line"

const getWomenProducts = ()=>{
    return axios("https://kirti123.herokuapp.com/data?type=men")

}
export default function Men(){
    const {proState,proDispatch} = useContext(ProductContext)
    
    useEffect(()=>{
       handleFetchData()
    },[])

    const handleFetchData = async ()=>{
      try{
        const res = await getWomenProducts()
        // console.log(res.data)
        proDispatch(productsuccess(res.data))
      }
      catch(err){
        console.log(err)
        proDispatch(productfailure())
      }
    }
    useEffect(()=>{
        getWomenProducts()
        .then((res)=>{
            console.log(res)
        })
    },[])
    return (
        <Box>
            {/* <Line/> */}
        <SimpleGrid columns={[1,2,3]} ml = {20} spacing={[3,2,1]}>
        {
            proState.data && proState.data.map((user)=>{
                return(
                       
                        <Box border = "1px" borderColor = "gray.400" my = {7}   boxShadow='lg' p='30' rounded='md' bg='white' h = "500px" width = "400px" key = {user.id}>
                            <Center>
                                <Box w = "250px">
                             <Image h="300px" w="200px" src = {user.avatar} alt = {user.Title}/>
                             </Box>
                             </Center>
                             <Center>
                             <Link to = {`/productPage/${user.id}`} ><Text  mb = "5px">{user.Title}</Text></Link>
                             </Center>
                             <Center>
                             <Box color = "green"><Text fontSize = {22} mb = "5px">☆{user.Rating}</Text></Box>
                             </Center>
                             <Center>
                             <Heading mb = "5px"  size = "md">INR {user.Price}</Heading>
                             </Center>
                            
                        </Box>
                    
                )
            })
        }
        </SimpleGrid>
        </Box>
    )
}