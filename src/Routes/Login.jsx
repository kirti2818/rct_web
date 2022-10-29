import React from "react"
import { useNavigate,Link } from "react-router-dom"
import { useDisclosure,Button,Text,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,DrawerCloseButton,Stack,Box,FormLabel,Input,Select,Textarea,DrawerFooter,InputGroup,InputRightAddon,InputLeftAddon,Center } from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { signUpDat } from "./signUpPost"

export default function Login(){
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[array,setArray] = useState([])
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const checkCredentials=(email)=>{
   var filtered = array.filter((user)=>{
     return user.Email === email && user.Password === password;
   })
   if(filtered.length!==0){
     return true
   }
   else{
     return false;
   }
  }

  const handlesubmit = ()=>{
    const newItem = {
      Email :email,
      Password : password
    }
    if(checkCredentials(newItem.Email,newItem.Password)===true ){
       alert("login Successfully")
       handleFetch()
       navigate("/")
    }
    else{
      alert("wrong credentials")
      handleFetch()
    }
  }

  useEffect(()=>{
   handleFetch()
  },[])
  const handleFetch = ()=>{
    signUpDat()
    .then((res)=>{
      console.log(res.data)
      setArray(res.data)
    })
  }
  return(
    <>
<Center>
<Button mt = {20} w = "500px"  leftIcon={<AddIcon />} color = "white" bg = "black"><Link to = "/signup">Create an another Account</Link> </Button>

<Button  mt = "80px" color = "white" bg = "black" onClick={onOpen}>
<Link to = "/login">  Sign In</Link>
           
      </Button>
      </Center>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Sign In
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Email</FormLabel>
                <Input
                  value = {email}
                  onChange = {(e)=>setEmail(e.target.value)} 
                  ref={firstField}
                  id='useremail'
                  placeholder='Please enter user email'
                />
              </Box>

              <Box>
              <FormLabel htmlFor='userpassword'>Password</FormLabel>
                <Input
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)} 
                  id='userpassword'
                  placeholder='Please enter user password'
                />
              </Box>

            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick = {handlesubmit} colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    {/* <input value = {email} onChange = {(e)=>setEmail(e.target.value)} placeholder="Email" type="email"/>
    <input value = {password} onChange = {(e)=>setPassword(e.target.value)} placeholder="Password" type="password"/>
    <button onClick = {handlesubmit}>Submit</button> */}
    
    </>
  )
}