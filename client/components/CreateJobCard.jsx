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

  const { setCardList, getCardList, getUserState, setUserState } = props;

  const saveJob = () => {
    const userState = getUserState();

    const body = {
      name,
      title,
      link,
      notes
    };

    fetch(`/api/jobs/${userState.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      setCardList(data);
    })
    .catch(err => console.log(err));
  };


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
      <h2>Create New Job Card</h2>
      <form>
        <h3>Company Name:</h3> 
        <input
          id="companyName"
          onChange={nameOnChange}
        />
        <h3>Job Title:</h3>
        <input
          id="jobTitle"
          onChange={titleOnChange}
        />
        <h3>Link to job description:</h3>
        <input
          id="linkToJobDesc"
          onChange={linkOnChange}
        />
        <h3>Additional notes: </h3>
        <textarea id="notes" onChange={notesOnChange} />
        <button
          type="button"
          onClick={saveJob}
        >
          Add Job
        </button>
      </form>
    </Box>
    
  );

};

export default CreateJobCard;

