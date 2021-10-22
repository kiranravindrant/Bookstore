import React, { useEffect, useState } from 'react'
import '../css/mycart.css'
import CustomerDetails from './CustomerDetails'
import Header from './Header'
import { getCartitems, Quantity, Removeitem } from '../services/dataservices'

function Mycart() {

    const[addressfields,showAddress]=useState(false)
    const[showbutton,setView]=useState(true)
    const[order,showOrder]=useState(false)
    const[cartitems,setCartitems]=useState([])
    // const[count,setCount]=useState(cartitems.quantityToBuy)

    useEffect(() => {

        loadcartitems()         
        
    }, [])
    
   
const loadcartitems=()=>{

    getCartitems().then((response)=>{
        console.log(response,"data recieved in cart")
        setCartitems(response.data.result)
    }).catch((error)=>{
        console.log(error)
    })                

}



  const incrementcount=(obj)=>{
      
     
        let cartid=obj._id
        let q=obj.quantityToBuy
        
    let qdata={
        "quantityToBuy":q+1,
        "cartid":cartid
      }
      console.log(qdata,"check the object")
       

        Quantity(qdata).then((response)=>{
           console.log(response,"updated count")
           loadcartitems()
        }).catch((error)=>{
        console.log(error)
        })

    }


    const decrementcount=(obj)=>{
      
        let cartid=obj._id
        let q=obj.quantityToBuy
        
    let qdata={
        "quantityToBuy":q-1,
        "cartid":cartid
      }
      console.log(qdata,"check the object")
       
      if(q>1){
        Quantity(qdata).then((response)=>{
           console.log(response,"updated count")
           loadcartitems()
        }).catch((error)=>{
        console.log(error)
        })
        }else {
            alert("Quantity cannot be zero")
        }

    }


    const deleteitem=(obj)=>{

        let cartid=obj._id
        Removeitem(cartid).then((response)=>{
            console.log(response)
            loadcartitems()
        }).catch((error)=>{
            console.log(error)
        })

    }


    const showaddress=()=>{
        showAddress(true)
        setView(false)

    }

    const showsummary=()=>{
        showOrder(true)


    }

    return (
        <div> <Header/>
            <div className="path-cart">
                <p className="path-title-cart">
                    Home/ <span id="p_end">My cart</span>
                </p>
            </div>

            <div className="cart-outercontainer">

                <div className="mycart-box">

                    <div className="cart-title">
                        <p id="cart-title"> My cart({cartitems.length})</p>
                        <div className="location-bar">

                        </div>
                    </div>
                <div className="allcartitems">
                    {cartitems.map((obj)=>{ 
                        return (
                        <div key={obj.product_id._id} className="row_cartitem">
                            <div className="itemdetails">
                                <div className="itemposter">

                                </div>

                                <div className="book-details-cart">
                                    <p id="cartitem-title">{obj.product_id.bookName}</p>
                                    <p id="cartitem-author">{obj.product_id.author}</p>
                                    <p id="Price">Rs. {obj.product_id.price}</p> <span id="discount-price"> Rs.{obj.product_id.discountPrice + obj.product_id.price}</span>
                                </div>  
                                

                            </div>
                            <div id="cartcount-buttons">
                                    <div className="less-button" onClick={()=>decrementcount(obj)} >
                                        −
                                    </div>

                                    <div className="countbox-view">
                                       {obj.quantityToBuy}
                                    </div>

                                    <div className="more-button" onClick={()=>incrementcount(obj)}>
                                        ＋
                                    </div>

                                    <div className="remove-from-cart" onClick={()=>deleteitem(obj)}>
                                        Remove
                                    </div>
                                       
                                </div> 

                    </div>)})}

                    <div className="row_cartitem-remove">
                                                              
                            <div id="button-container">
                                {showbutton?<div className="placeorder" onClick={showaddress}>
                                    <p>PLACE ORDER</p>
                                </div>:console.log("Place holder clicked!!")}
                            </div>
                            

                    </div>

                </div>


                </div>

                
                


            </div>


            <div className="cart-outercontainer">

                    {!addressfields? <div className="address-details-cart">

                        <p id="cpt01">Address Details</p>
                    </div>:<CustomerDetails showsummary={showsummary}/>}

                    


            </div>

             <div className="cart-outercontainer">

                    {!order?<div className="order-details-cart">

                    <p id="cpt01">Order summary</p>
                    </div>: 

                    <div className="ordersummary-outer-box">
                            <div className="title-bar-order">
                                <p>Order Summary</p>
                            </div>

                            <div className="item-bar-order">
                                    <div className="itemdetails">
                                        <div className="itemposter">

                                        </div>

                                        <div className="book-details-cart">
                                            <p id="cartitem-title"> Dont Make me Think</p>
                                            <p id="cartitem-author">by Steve krug</p>
                                            <p id="Price">Rs. 1500</p> <span id="discount-price"> Rs.2000</span>
                                        </div>  

                                    </div>
                            </div>

                            <div className="checkout-bar">
                                    <div className="checkout">
                                        <p>CHECK OUT</p>
                                    </div>

                            </div>

                    </div>}


            </div>


        </div>
    )
}

export default Mycart
