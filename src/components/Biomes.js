import React from 'react';
import styled from 'styled-components';
import CurrentBiome1 from '../static/png/prairie.png';
import CurrentBiome2 from '../static/png/foret.png';
import FutureBiome1 from '../static/png/deforestation.png';
import FutureBiome2 from '../static/png/erosion.png';
import { withContext } from '../Provider';

const StyledCurrentBiome1 = styled.img`
  position: absolute;
  width: 40%;
  bottom: 0;
  z-index: 1;
`;

const StyledCurrentBiome2 = styled.img`
  position: absolute;
  width: 50%;
  bottom: 0;
  right: 50%;
`;

const StyledFutureBiome1 = styled.img`
  position: absolute;
  width: 50%;
  bottom: 0;
  left: 50%;
`;

const StyledFutureBiome2 = styled.img`
  position: absolute;
  width: 42%;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const StyledCause1 = styled.h1`
  position: absolute;
  top: 30rem;
  right: 22rem;
  z-index: 1;
`;

const Biome = ({ causes }) => {
  let cause = '';
  if (causes) {
    const firstCause = Object.keys(causes)[0];
    cause = firstCause.charAt(0).toUpperCase() + firstCause.slice(1)
  }
  return (
    <>
      <StyledCause1>{causes && cause}</StyledCause1>
      <div className="columns is-gapless">
        <div className="column">
          <StyledCurrentBiome1 src={CurrentBiome1} alt="first current biome" />
          <StyledCurrentBiome2 src={CurrentBiome2} alt="second current biome" />
        </div>
        <div className="column">
          <StyledFutureBiome1 src={FutureBiome1} alt="first future biome" />
          <StyledFutureBiome2 src={FutureBiome2} alt="second future biome" />
        </div>
      </div>
    </>
  );
};

export default withContext('causes')(Biome);
