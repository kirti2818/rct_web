import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import Payment from "./Payment"
import Women from "./Women"
import Men from "./Men"
import Kids from "./Kids"
import Active from "./Active"
import Cart from "./Cart"
import ProductPage from "./ProductPage"
export default function AllRoutes(){
    return(
        <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/signup" element = {<SignUp/>}/>
            <Route path = "/cart" element={<Cart/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/payment" element = {<Payment/>} />
            <Route path = "/women" element={<Women/>} />
            <Route path = "/men" element={<Men/>} />
            <Route path = "/kids" element={<Kids/>} />
            <Route path = "/active" element={<Active/>} />
            <Route path = "/productPage/:id" element={<ProductPage/>} />
        </Routes>
    )
}