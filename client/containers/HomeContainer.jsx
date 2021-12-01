import React from 'react';
import ReactDOM from 'react-dom';
import {useLocation} from "react-router-dom";
import CreateJobCard from '../components/CreateJobCard';
import JobContainer from '../containers/JobContainer';
import '../sass/styles.scss';


const HomeContainer = (props) => {
  // const {state} = useLocation();
  // console.log(state);
  const { getIsLoggedIn, setIsLoggedIn, getUserState, setUserState} = props;
  
    return (
        <div>
          <div id="inputJobCard">
            <CreateJobCard/>
          </div>
          <div id="jobContainer">
            <JobContainer getIsLoggedIn={getIsLoggedIn} setIsLoggedIn={setIsLoggedIn} getUserState={getUserState} setUserState={setUserState}/>
          </div>
        </div>
      );
}


export default HomeContainer;