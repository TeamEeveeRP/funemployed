import React, { useState } from 'react';
import Box from '@mui/material/Box';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
    // e.preventDefault();
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const CreateJobCard = props => {
  const [ name, nameOnChange ] = useInput('');
  const [ title, titleOnChange ] = useInput('');
  const [ link, linkOnChange ] = useInput('');
  const [ notes, notesOnChange ] = useInput('');

  const saveJob = () => {
    const body = {
      name,
      title,
      link,
      notes
    };
    console.log(body);
    fetch('/api/jobs/:userid', {
      method: 'POST',
      headers: {
        'Content-Type': "application/JSON"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err));

  }


  return (
   
    <Box sx={{  
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center',
      width: 300,
      backgroundColor: 'tan',
      marginTop: 5,
      marginBottom: 5
      
    }}>
     {/* <div id="jobCard"> */}
      <h2>Create New Job Card</h2>
      <br></br>
      <form>
        <h3>Company Name:</h3> 
        <input id="companyName" onChange={nameOnChange}></input>
        <h3>Job Title:</h3>
        <input id="jobTitle" onChange={titleOnChange}></input>
        <h3>Link to job description:</h3>
        <input id="linkToJobDesc" onChange={linkOnChange}></input>
        <h3>Additional notes:</h3>
        <input id="notes" onChange={notesOnChange}></input>
        <br></br>
        <button type="button" onClick={saveJob}>Add Job</button>
      </form>
     {/* </div> */}
    </Box>
    
  );

};

export default CreateJobCard;

