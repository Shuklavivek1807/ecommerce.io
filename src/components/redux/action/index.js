// For Add Item to Cart

export const addCart = (data) => {
    return{
        type : "ADDCART",
        payload : data
    }
}

// For Delete Item to Cart

export const delCart = (data) => {
    return{
        type : "DELITEM",
        payload : data
    }
}