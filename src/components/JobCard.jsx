import React, { useState } from 'react';
import Box from '@mui/material/Box';


const JobCard = (props) => {
  const { name, link, title, notes } = props;


    return (
        <Box sx={{  
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
            width: 300,
            height: 300,
            backgroundColor: 'tan',
            marginTop: 5,
            marginBottom: 5
            
        }}>

            <h2>Job Details</h2>
            <br></br>
            <ul>
            <li>Company: {name}</li> 
            <li>Job Title: {title}</li>
            <li>Link to job description: {link}</li>
            <li>Additional notes: {notes}</li>
            </ul>

        </Box>
    )
}

export default JobCard;