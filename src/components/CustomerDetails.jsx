import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import '../css/customerDetails.css'


function CustomerDetails(props) {

const[visibility,setVisiblity]=useState(true)

const showsummary=()=>{
    props.showsummary()
    setVisiblity(false)

}

    return (
        <div className="validation-box">

        <div className="customer-details-title">
            <p>Customer  details</p>
            <div className="addnewaddress">
                <p>Add new Address</p>
            </div>

        </div>

        <div className="inputfields-container">
            <div className="row-1-field">
              
                <TextField 
                        label="Fullname"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="fullname-1r"
                        
                        />
                         <TextField 
                        label="Mobile Number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="mobilenum-1r"
                        
                        />
                
            </div>
            <div className="row-2-field">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Address"
                className="Address-2r"
                />
            </div>
            <div className="row-3-field">
            <TextField 
                        label="City/Town"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="city-3r"
                        
                        />
                         <TextField 
                        label="State"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="state-3r"
                        
                        />
            </div>
            <div className="row-4-field">
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup row aria-label="Type" name="row-radio-buttons-group">
                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                <FormControlLabel value="Work" control={<Radio />} label="Work" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>

            

        </div>

        <div className="continue-button-container">
            {visibility?<div className="continue-button" onClick={showsummary}>
                <p>CONTINUE</p>
            </div>:console.log("continue to order")}
        </div>




</div>

    )
}

export default CustomerDetails
