import React from 'react';
import ReactDOM from 'react-dom';
import CreateJobCard from '../components/CreateJobCard';
import JobContainer from '../containers/JobContainer';
import '../sass/styles.scss';


const HomeContainer = (props) => {
  console.log('props', props);
    return (
        <div>
          <div id="inputJobCard">
            <CreateJobCard/>
          </div>
          <div id="jobContainer">
            <JobContainer/>
          </div>
        </div>
      );
}


export default HomeContainer;