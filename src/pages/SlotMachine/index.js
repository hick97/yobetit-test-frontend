import React, { useState } from 'react';

import { Container } from './styles';

import bananaURL from '../../assets/banana.svg';
import appleURL from '../../assets/apple.svg';
import cherryURL from '../../assets/cherries.svg';
import lemonURL from '../../assets/lemon.svg';

const fruits = {
  banana: 0,
  apple: 1,
  cherry: 2,
  lemon: 3,
};

const pics = [bananaURL, appleURL, cherryURL, lemonURL];

const SlotMachine = () => {
  const [firstIndex, setFirst] = useState(0);
  const [secondIndex, setSecond] = useState(1);
  const [thirdIndex, setThird] = useState(2);

  function showSpinResult(t1, t2, t3) {
    const result = ['banana', 'cherry', 'lemon'];

    setFirst(fruits[result[0]]);
    setSecond(fruits[result[1]]);
    setThird(fruits[result[2]]);

    clearInterval(t1);
    clearInterval(t2);
    clearInterval(t3);
  }

  function rollingFruits() {
    const firstT = setInterval(() => setFirst(state => (state + 1) % 4), 50);
    const secondT = setInterval(() => setSecond(state => (state + 1) % 4), 50);
    const thirdT = setInterval(() => setThird(state => (state + 1) % 4), 50);

    setTimeout(() => showSpinResult(firstT, secondT, thirdT), 4000);
  }

  return (
    <Container>
      <div>
        <img className="bg" src={pics[firstIndex]} />
        <img className="bg" src={pics[secondIndex]} />
        <img className="bg" src={pics[thirdIndex]} />
        <button onClick={rollingFruits}>GIRAR</button>
      </div>
    </Container>
  );
};

export default SlotMachine;
