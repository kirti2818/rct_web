
export const addToCart = (data)=>({
    type : "ADD_TO_CART",
    payload : data,
})

export const removeProduct = (id)=>({
    type : "REMOVE",
    payload : id,
})

export const checkout = ()=>({
    type : "CHECKOUT",
})