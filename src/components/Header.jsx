import React from 'react'
import '../css/header.css'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router";

function Header() {
    let history=useHistory()
        const gotocart=()=>{
        history.push("/cart")        
        }

        const gotohome=()=>{
            history.push("/home")    
        }

    return (
        <div className="header-container">
            
            <div className="header-innerbox">

                <div className="logo_title" onClick={gotohome}>
                    <div className="logo">

                    </div>
                    <div className="title" >
                        <p> Bookstore</p>
                    </div>
                  
                </div>

                <div className="searchbar">

                </div>

                    <div className="right-options">
                            <div className="profile">
                            <PermIdentityOutlinedIcon className="righticon"  fontSize="medium" />
                                Profile
                            </div>

                            <div className="cart" onClick={gotocart}>
                            <ShoppingCartOutlinedIcon  className="righticon" fontSize="medium"/>
                                Cart
                            </div>
                    </div>

            </div>

        </div>
    )
}

export default Header
