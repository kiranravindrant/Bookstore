import React from 'react'
import Books from './Books.jsx'
import Header from './Header.jsx'   
import { useHistory } from "react-router";
function Home() {

let history=useHistory()

 const showDetails =(data)=>{
    history.push("/bookdetails",data)
    console.log("data pushed",data)
 }   
    return (
        <div>
            <Header/>
           
            <Books whenclicked={(data)=>showDetails(data)}/> 
            
            
            
        </div>
    )
}

export default Home
