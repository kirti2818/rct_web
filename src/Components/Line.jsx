import {Spacer,Box,Flex,Center,Heading} from "@chakra-ui/react"
import {Link} from "react-router-dom"
export default function Line(){
    return(
        <>
        <Center>
        <Box bg = "gray.400" mb = {4}  border = "1px" borderColor = "gray.400" width = "1100px"> 
        </Box>
        </Center>
        <Flex columns={[1,2,4]} spacing={3}>
            <Spacer/>
            <Box><Link to = "/"><Heading size = "md">All Products</Heading></Link></Box>
            <Spacer/>
            <Box><Link to = "/women"><Heading size = "md">Women</Heading></Link></Box>
            <Spacer/>
            <Box><Link to = "men"><Heading size = "md">Men</Heading></Link></Box>
            <Spacer/>
            <Box><Link to = "kids"><Heading size = "md">Kids</Heading></Link></Box>
            <Spacer/>
            <Box><Link to = "active"><Heading size = "md">Active Wear</Heading></Link></Box>
            <Spacer/>
        </Flex>
        </>
    )
}