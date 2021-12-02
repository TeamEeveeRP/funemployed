import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import 'regenerator-runtime/runtime';


const JobContainer = (props) => {
  const { getIsLoggedIn, setIsLoggedIn, getUserState, setUserState, getCardList, setCardList } = props;
  console.log('users id: ', getUserState().userId)
  // const [cardList, setCardList] = useState([]);
  
  useEffect(() => {
    // did get request 
    fetch(`/api/jobs/${getUserState().userId}`, { 
      method: 'GET',
      headers: {
        'Content-Type': "application/JSON"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('DATA: ', data); //why is this not returning all values?
      setCardList(data);
    })
    .catch((err) => {
      console.error(err)
    });
  }, []);
  console.log('getCardList data: ', getCardList())
  const data = getCardList()
  const cardData = data.map((job) => {
    return (
      <div key={job._id}>
        <JobCard
          key={job._id}
          userId={job.userId}
          name={job.company}
          link={job.link}
          title={job.job_title}
          notes={job.notes}
          status={job.status}
        />
      </div>
    );
  })

  return (
    <ul>
      {cardData}
    </ul>
  );
}


export default JobContainer;