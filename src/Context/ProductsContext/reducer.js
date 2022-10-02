export default function ProductReducer(state,action){
    switch(action.type){
        case "PRODUCT_SUCCESS":
            return {
                ...state,
                data :action.payload,
                loading : false
            }
            case "PRODUCT_FAILURE":
                return {
                    ...state,
                    data : [],
                    loading : true
                }
                default : return state;
    }
}