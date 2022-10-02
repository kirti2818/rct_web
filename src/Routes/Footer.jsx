import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import { BsInstagram } from "react-icons/bs";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box bg={"rgb(249,249,249)"}>
      <Flex  p={10} border="1px" borderColor="black.200">
        <Flex pl={8} direction={"column"} color="black" textAlign={"left"}>
          <Text fontSize = {19}  fontWeight={700}>Customer Service</Text>
          <Flex direction={"column"} color={"black.400"} cursor="pointer">
            <Text mb={2}>Contact Us</Text>
            <Text mb={2}>Order Status</Text>
            <Text mb={2}>Shipping</Text>
            <Text mb={2}>Return Policy & Exchange</Text>
            <Text mb={2}>Price Adjustments</Text>
            <Text mb={2}>Gift Cards</Text>
            <Text mb={2}>FAQ</Text>
            <Text mb={2}>Product Recalls</Text>
            <Spacer />

          </Flex>
        </Flex>
        <Spacer />
        <Flex pl={8} direction={"column"} color="black" textAlign={"left"}>
          <Text fontSize = {19} fontWeight={700}>About Us</Text>
          <Flex direction={"column"} color={"black.400"} cursor="pointer">
            <Text mb={2}>Carrers</Text>
            <Text mb={2}>Corporate Social Responsibility</Text>
            <Text mb={2}>Diversity,Inclusion & Belonging</Text>
            <Text mb={2}>Get Email Updates</Text>
            <Text mb={2}>Nordstrom Blog</Text>
            <Text mb={2}>The Thread</Text>
            <Text mb={2}>Nordy PodCast</Text>
            <Spacer />
          </Flex>
        </Flex>

        <Spacer />
        <Flex pl={8} direction={"column"} color="black" textAlign={"left"}>
          <Text fontSize = {19} fontWeight={700}>Stores & Services</Text>
          <Flex direction={"column"} color={"black.400"} cursor="pointer">
            <Text mb={2}>Find a Store</Text>
            <Text mb={2}>Free Style Help</Text>
            <Text mb={2}>Alterations & Tailoring</Text>
            <Text mb={2}>Pop-In-shop</Text>
            <Text mb={2}>Virtual Events</Text>
            <Text mb={2}>Spa Nordstrom</Text>
            <Text mb={2}>Nordstrom Restaurants</Text>
            <Text mb={2}>Nordstrom Local</Text>
            <Spacer />

          </Flex>
        </Flex>
        <Spacer />
        <Flex pl={8} direction={"column"} color="black" textAlign={"left"}>
          <Text fontSize = {19} fontWeight={700}>Nordstrom Cards & Rewards</Text>
          <Flex direction={"column"} color={"black.400"} cursor="pointer">
            <Text mb={2}>The Nordy Club Rewards</Text>
            <Text mb={2}>Pay My Bill</Text>
            <Text mb={2}>Shipping</Text>
            <Text mb={2}>Manage My Nordstrom Card</Text>
            <Spacer />
          </Flex>
        </Flex>
        <Spacer />
        <Flex pl={8} direction={"column"} color="black" textAlign={"left"}>
        <Text fontSize = {19} fontWeight={700}>Nordstrom,Inc.</Text>
          <Flex direction={"column"} color={"black.400"} cursor="pointer">
            <Text mb={2}>Nordstrom Rack</Text>
            <Text mb={2}>Nordstrom Canada</Text>
            <Text mb={2}>Investor Relations</Text>
            <Text mb={2}>Press Release</Text>
            <Text mb={2}>Nordstrom Media Network</Text>
            <Spacer />

          </Flex>
        </Flex>
        <Spacer />
        <Flex pl={8} direction={"column"} color="black">
          <Text pr = {8} fontWeight={700}>Get Our Apps</Text>
          <Flex direction={"row"} color={"black.400"} cursor="pointer">
            <Box><InstagramIcon/></Box>
            <Box><PinterestIcon/></Box>
            <Box><TwitterIcon/></Box>
            <Box><FacebookOutlinedIcon/></Box>
           

          </Flex>
        </Flex>
        </Flex>
    </Box>
  );
}

export default Footer;