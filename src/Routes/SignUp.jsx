import {Box,Heading,Container,FormLabel,Input} from "@chakra-ui/react"
import {useState} from "react"
import { useNavigate } from "react-router-dom"


export default function Login (){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    var arr =  []
    const navigate = useNavigate()
  function handleSubmit()
  {
      var obj = {
         email : email,
         password : password
      }
      
      arr.push(obj)
      localStorage.setItem("dataArr",JSON.stringify(arr))
      console.log(arr)
      alert("Submission done")
      navigate("/login")
  }
    return (
        <>
        <Heading width="400px" mx="600px" my="30px" color="black">Sign Up</Heading>
        <Container px="50px" py={10} boxShadow='xl'  >
            <form onSubmit = {handleSubmit} >
                <FormLabel color="red" >Email address</FormLabel>
                <Input htmlSize={4} width='400px' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" type='email' />

                <FormLabel color="red"  >Password</FormLabel>
                <Input htmlSize={4} width='400px' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" type='password' />
                 <Input  type = "submit"/>
                {/* <Box ><Button my={7} w="400px" onClick={handleSubmit}>Submit</Button></Box> */}


            </form>
        </Container>
        </>
    )
}