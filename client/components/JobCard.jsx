import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


const JobCard = (props) => {
  const { name, link, title} = props;
  let { notes, status } = props;

  // cannot have parts state set to null, so we change the null values to undefined or an empty stri
  status = status ? status : undefined;
  notes = notes ? notes : '';
  const [ newStatus, setStatus ] = useState(status);

  useEffect(() => {
    
  })

  const postStatus = () => {
    fetch('/api/updateStatus', {
      method: 'POST',
      headers: {
        'Content-Type': "application/JSON"
      },
      body: JSON.stringify(newStatus)
    })
  }

    return (
        <Box sx={{  
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'whitesmoke',
            width: 300,
            height: 300,
            marginTop: 5,
            marginBottom: 5
        }}>
            <h2>{name}</h2>
            <select className="status" value={newStatus} onChange={e => {
              setStatus(e.target.value); 
              postStatus(); // might invoke before setStatus is done
            }}
            >
              <option className="status-type">Please Choose Status</option>
              <option className="status-type">Applied 👏</option>
              <option className="status-type">First Interview Scheduled 1️⃣</option>
              <option className="status-type">Second Interview Scheduled 2️⃣</option>
              <option className="status-type">Third Interview Scheduled 3️⃣</option>
              <option className="status-type">Offer received ✅</option>
              <option className="status-type">Rejected ❌</option>
            </select>
            <ul>
            <li>Job Title: {title}</li>

            <li>Link to job description:  
              <a href={link}> {link}</a>
            </li>
            <li>Additional notes: <br/>{notes}</li>
            </ul>
        </Box>
    )
}

export default JobCard;