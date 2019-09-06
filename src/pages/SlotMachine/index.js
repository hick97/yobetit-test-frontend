import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdExplore, MdLoop } from 'react-icons/md';

import CountUp from 'react-countup';

import { Container, ContentHeader } from './styles';

import bananaURL from '../../assets/banana.svg';
import appleURL from '../../assets/apple.svg';
import cherryURL from '../../assets/cherries.svg';
import lemonURL from '../../assets/lemon.svg';

import { getSpinResultRequest } from '../../store/modules/machine/actions';

// URLs reference to fruit photos
const fruits = {
  banana: 0,
  apple: 1,
  cherry: 2,
  lemon: 3,
};

const pics = [bananaURL, appleURL, cherryURL, lemonURL];

const SlotMachine = () => {
  const dispatch = useDispatch();

  const coins = useSelector(state => state.user.profile.coins);

  // Current user coins
  const { coins_won, winner, spin: reels } = useSelector(
    state => state.machine.spin_result
  );

  // Initializing reels
  const [firstIndex, setFirst] = useState(0);
  const [secondIndex, setSecond] = useState(1);
  const [thirdIndex, setThird] = useState(2);

  function showSpinResult(t1, t2, t3) {
    dispatch(getSpinResultRequest());

    // Setting spin result
    setFirst(fruits[reels[0]]);
    setSecond(fruits[reels[1]]);
    setThird(fruits[reels[2]]);

    // Stopping roll
    clearInterval(t1);
    clearInterval(t2);
    clearInterval(t3);
  }

  function rollingFruits() {
    // Disturbing photos
    const firstT = setInterval(() => setFirst(state => (state + 1) % 4), 50);
    const secondT = setInterval(() => setSecond(state => (state + 1) % 4), 50);
    const thirdT = setInterval(() => setThird(state => (state + 1) % 4), 50);

    // Show result after 4 seconds
    setTimeout(() => showSpinResult(firstT, secondT, thirdT), 4000);
  }

  return (
    <Container>
      <ContentHeader>
        <h1>Country Hunter</h1>
        <Link to="/dashboard">
          <button>
            <MdExplore size={20} color="#FFF" />
            COUNTRY HUNTER
          </button>
        </Link>
      </ContentHeader>
      <div>
        <img className="bg" src={pics[firstIndex]} alt="First Reel" />
        <img className="bg" src={pics[secondIndex]} alt="Second Reel" />
        <img className="bg" src={pics[thirdIndex]} alt="Third Reel" />
      </div>
      <div>
        <button onClick={rollingFruits}>
          <MdLoop size={20} color="#FFF" />
          SPIN
        </button>
        {coins_won > 0 ? (
          <h3>Congratulations! You won {coins_won} coins!</h3>
        ) : null}
        {!winner && <h3>Nice try, but it was not this time</h3>}
      </div>
      <div>
        <h2>Your balance: </h2>
        <strong>
          <CountUp end={coins} duration={3} />
        </strong>
        <span>coins</span>
      </div>
    </Container>
  );
};

export default SlotMachine;
