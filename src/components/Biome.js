import React from 'react';
import styled from 'styled-components';
import CurrentBiome1 from '../static/svg/pb-actuel-1.svg';
import CurrentBiome2 from '../static/svg/pb-actuel-2.svg';
import FutureBiome1 from '../static/svg/pb-futur-1.svg';
import FutureBiome2 from '../static/svg/pb-futur-2.svg';

const StyledCurrentBiome1 = styled(CurrentBiome1)`
  position: absolute;
  width: 35%;
  bottom: 0;
  z-index: 1;
`;

const StyledCurrentBiome2 = styled(CurrentBiome2)`
  position: absolute;
  width: 30%;
  bottom: 0;
  right: 50%;
`;

const StyledFutureBiome1 = styled(FutureBiome1)`
  position: absolute;
  width: 30%;
  bottom: 0;
  left: 50%;
`;

const StyledFutureBiome2 = styled(FutureBiome2)`
  position: absolute;
  width: 35%;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const Biome = () => (
  <div className="columns is-gapless">
    <div className="column">
      <StyledCurrentBiome1 />
      <StyledCurrentBiome2 />
    </div>
    <div className="column">
      <StyledFutureBiome1 />
      <StyledFutureBiome2 />
    </div>
  </div>
);

export default Biome;
