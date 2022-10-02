export function productsuccess(data){
    return {
      type : "PRODUCT_SUCCESS",
      payload : data 
    }
  }
  
  export function productfailure(){
      return {
        type : "PRODUCT_FAILURE"
      }
    }
  