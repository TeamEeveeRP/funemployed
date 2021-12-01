import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';


// const CardList = (data) => {
// //   const data = [{
// //     name: 'Facebook',
// //     link: 'https://www.facebook.com/',
// //     title: 'software engineer',
// //     notes: 'great company'
// // }, {
// //   name: 'Facebook',
// //   link: 'facebook.com',
// //   title: 'software engineer',
// //   notes: 'great company'
// // }];
//   return (
//     <ul>
//       {data.map(job => {
//         return <JobCard userId={job.userId} name={job.company} link={job.link} title={job.job_title} notes={job.notes} key={job._id} status={job.status}/>;
//       })}
//     </ul>

//   );
// };

const JobContainer = (props) => {
  const { getIsLoggedIn, setIsLoggedIn, getUserState, setUserState } = props;
  console.log('users id: ', getUserState().userId)
  const [cardList, useCardList] = useState([]);

  
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
      console.log('get job cards data: ', data);
      useCardList(data);
    })
    .catch((err) => {
      console.error(err)
    });
  }, []);
  
  return (
    <ul>
      {cardList.map((job) => {
        return (
          <JobCard
            userId={job.userId}
            name={job.company}
            link={job.link}
            title={job.job_title}
            notes={job.notes}
            key={job._id}
            status={job.status}
          />
        );
      })}
    </ul>
  );
}


export default JobContainer;