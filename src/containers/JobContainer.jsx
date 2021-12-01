import React from 'react';
import JobCard from '../components/JobCard';


const CardList = (  ) => {
  const array1 = [{
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    title: 'software engineer',
    notes: 'great company'
}, {
  name: 'Facebook',
  link: 'facebook.com',
  title: 'software engineer',
  notes: 'great company'
}];
  return (
    <ul>
      {array1.map(job => {
        return <JobCard name={job.company} link={job.link} title={job.job_title} notes={job.notes} key={job._id} status={job.status}/>;
      })}
    </ul>

  );
};

const JobContainer = (props) => {
  // fetch('/api/jobs/:userid', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': "application/JSON"
  //   }
  //   .then(data => JSON.stringify(data))
  //   .then(props => {
  //     return (
  //       <CardList props={props}/>
  //     )
  //   })
  // })
  return (
    <CardList />
  )
}
 
 


export default JobContainer;