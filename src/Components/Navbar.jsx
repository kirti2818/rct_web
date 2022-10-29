import { NavLink } from "react-router-dom"
import {Image,SimpleGrid,Input,Heading,HStack,Text,Spacer,Box,Flex,Center,MenuButton,MenuList,MenuItem,Menu,Button} from "@chakra-ui/react"
import {ChevronDownIcon,Search, SearchIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import Line from "./Line";
// import Footer from "../Routes/Footer"

export default function Navbar(){
    const { state, dispatch } = useContext(CartContext);
    return (
        <>
        <Flex boxShadow='lg' ml = {2} mt = {10} h = "100px">
            {/* <Spacer/> */}

            <Box >
            <NavLink to = "/" >
        <Image width = "70%" src='https://n.nordstrommedia.com/alias/nordstrom-logo.svg' alt='Error' />
        </NavLink>
            </Box>

            <Spacer/>
            <Box>

            <HStack w = "500px">
        <Box p = "6px" w = "60px" borderRadius = "5px" border='1px' h = "38px" borderColor='gray.200'><SearchIcon  /></Box>

        <Input  w = "700px" type='text' placeholder="Search for products or brands" />
        </HStack>
        </Box>

        <Spacer/>
        <Box>
        <NavLink><Menu>
  <MenuButton fontSize = "17px" bg = "rgb(255,255,255)"  as={Button} rightIcon={<ChevronDownIcon />}>
    Sign In
  </MenuButton>
  <MenuList>
    <MenuItem><Link to = "/login">Sign In</Link></MenuItem>
    <MenuItem><Link to = "/payment">Purchases</Link></MenuItem>
    <MenuItem><Link to = "/cart">Cart</Link></MenuItem>
  </MenuList>
</Menu></NavLink>
</Box>
<Spacer/>
<Box>
<HStack>

    <LocalMallOutlinedIcon fontSize="large"/>
    
    <Box w = "20px" color = "white" bg = "black" mb = "25px"><Center>{state.length}</Center></Box>
        <NavLink to = "/cart"><Text fontSize='lg'>Purchases</Text></NavLink>
        
        </HStack>
        </Box>
        <Spacer/>
        <Center>
        <Box mb = "50px"> <NavLink to = "/payment"><ShoppingBagIcon fontSize="large"/></NavLink></Box>
        </Center>
        <Spacer/>

        </Flex>
      {/* <Line/> */}
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