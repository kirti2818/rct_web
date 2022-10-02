import React from "react"
import { useReducer } from "react";
import ProductReducer from "./reducer";

export const ProductContext = React.createContext();
const initState ={
    data : [],
    loading : false
}
export default function ProductContextProvider({children}){
    const [proState,proDispatch] = useReducer(ProductReducer,initState)
    return (
        <ProductContext.Provider value = {{proState,proDispatch}}>{children}</ProductContext.Provider>
    )
}