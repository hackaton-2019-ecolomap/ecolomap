import React from 'react';
import styled from 'styled-components';
import { withContext } from '../Provider';
import CurrentBiome1 from '../static/png/prairie.png';
import CurrentBiome2 from '../static/png/foret.png';
import FutureBiome1 from '../static/png/deforestation.png';
import FutureBiome2 from '../static/png/erosion.png';
import Mountain from '../static/svg/montagnes.svg';
import Nuage from '../static/svg/nuage.svg';
import Mer from '../static/svg/mer.svg';

const StyledTitle = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #9d9d9c;
`;

const StyledSubtitle = styled.p`
  position: absolute;
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  color: #9d9d9c;
`;

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

const StyledNuage = styled(Nuage)`
  position: absolute;
  bottom: 0;
`;

const StyledMountain = styled(Mountain)`
  position: absolute;
  bottom: 0;
`;

const StyledWater = styled(Mer)`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const Biome = ({ land }) => (
  <>
    <StyledTitle>{land}</StyledTitle>
    <StyledSubtitle>
      Cliquez sur les différents éléments pour voir les détails
    </StyledSubtitle>
    <StyledNuage />
    <StyledMountain />
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
    <StyledWater />
  </>
);

export default withContext('land')(Biome);
