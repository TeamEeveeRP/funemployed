import React, {useEffect} from 'react';
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
        return <JobCard userId={job.userId} name={job.company} link={job.link} title={job.job_title} notes={job.notes} key={job._id} status={job.status}/>;
      })}
    </ul>

  );
};


const JobContainer = () => {
  
  useEffect(() => {
    // did get request 
    getJobs(userId);
    // render componenets
    CardList();
  }, []);

  const getJobs = (userId) => {
    fetch(`/api/jobs/${userId}`, { 
    method: 'GET',
    headers: {
      'Content-Type': "application/JSON"
    }
  })
    .then(data => JSON.stringify(data))
  }
  

  return (
    <CardList />
  )
}
 
 


export default JobContainer;