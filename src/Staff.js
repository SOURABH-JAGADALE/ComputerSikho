import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"

 function Staff(){


    const navigate = useNavigate();
  const  callEnquiry=()=>{
        navigate('/Enquiry');
    }
    const callFollowups=()=>{
        navigate('/Followup')
    }

    return(
    <div>
        <button type="button" onClick={callEnquiry}>Enquiries</button>
        <button type="button" onClick={callFollowups}>Followups</button>
    </div>

    );
 }
 export default Staff;