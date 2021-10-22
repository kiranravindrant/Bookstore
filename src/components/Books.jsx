import React from 'react'
import '../css/books.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Bookcard from '../components/Bookcard'
import { useEffect,useState } from 'react';
import {getBooks } from '../services/dataservices.js'

function Books(props) {

    const[booklist,setBooklist]=useState([])

    

    useEffect(() => {
    getBooks().then((response)=>{
        console.log(response)
        setBooklist(response.data.result)
    }).catch((error)=>{
        console.log(error)
    })

    }, [])




const whenclicked=(data)=>{

    // console.log("test",data)
    props.whenclicked(data)
}


    return (
        <div className="books-container-main">
                <div className="books-container-inner">

                    <div className="books-titlebar">

                        <p id="title">Books</p> 
                        <div>
                        <Select className="sortmenu"
                        value="1"
                                >
                                <MenuItem value="1">Sort by relevance</MenuItem>
                                <MenuItem value="2">Sort by rating</MenuItem>

                        </Select>
                        </div>
                    </div>

                    <div className="bookcard-container"  >

                        {booklist.map((obj,index)=>{
                            return(
                        <Bookcard whenclicked={()=>whenclicked(obj)}   key={index} bookname={obj.bookName} rating={obj.rating} Author={obj.Author} price={obj.price} discountprice={obj.discountPrice}/> )

                        })}
                                                   
                    </div>


                </div>
        
        </div>
    )
}

export default Books
