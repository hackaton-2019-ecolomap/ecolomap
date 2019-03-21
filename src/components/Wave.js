import React from 'react';
import styled from 'styled-components';

const StyledWave = styled.div`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
    repeat-x;
  position: absolute;
  top: -140px;
  width: 6400px;
  height: 140px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  z-index: 1;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wave = () => (
  <StyledWrapper>
    <StyledWave />
  </StyledWrapper>
);

export default Wave;
