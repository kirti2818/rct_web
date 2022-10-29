
import axios from "axios"

const signUpData = (data = {})=>{
 return axios.post("http://localhost:3008/signup",{
   Email :data.Email,
   Password : data.Password
 })
}


const signUpDat = ()=>{
 return axios.get("http://localhost:3008/signup")
}

export {signUpData, signUpDat}