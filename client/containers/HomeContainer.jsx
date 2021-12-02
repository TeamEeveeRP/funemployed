import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useLocation} from "react-router-dom";
import CreateJobCard from '../components/CreateJobCard';
import JobContainer from '../containers/JobContainer';
import '../sass/styles.scss';
import logo from '../../media/fe-logo.png';


const HomeContainer = (props) => {
  const { getIsLoggedIn, setIsLoggedIn, getUserState, setUserState} = props;
  
  const [cardList, setCardList] = useState([]);

  const getCardList = () => cardList;
  
  return (
    <div id="home-container">
      <div id="inputJobCard">
        <img src={logo} alt="funemployed logo" />
        <CreateJobCard
          getUserState={getUserState}
          setUserState={setUserState}
          setCardList={setCardList}
          getCardList={getCardList}
        />
      </div>
      <div id="jobContainer">
        <JobContainer
          getIsLoggedIn={getIsLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          getUserState={getUserState}
          setUserState={setUserState}
          getCardList={getCardList}
          setCardList={setCardList}
        />
      </div>
    </div>
  );
}


export default HomeContainer;