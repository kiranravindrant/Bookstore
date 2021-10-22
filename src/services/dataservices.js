import axios from 'axios';
let header = { headers: { 'x-access-token': localStorage.getItem('token') } }

export const  getBooks=async()=>{

// let response=await axios.get("http://localhost:3004/books")
let response=await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book")
console.log("servicespage",response)
return response

}



export const addtoCart=async(product_id)=>{
console.log(header)
let response=await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/${product_id}`,null,header )
console.log("addtocart",response)
return response
}


export const getCartitems =async()=>{

    let response= await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items",header)
    return response
}

export const Quantity=async(qdata)=>{
    let cartItem_id=qdata.cartid
    let response = await axios.put(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cartItem_id}`,qdata,header)
    console.log(response)
    return response
    }
    
export const Removeitem=async(cartItem_id)=>{

let response=await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${cartItem_id}`,header)
return response
}