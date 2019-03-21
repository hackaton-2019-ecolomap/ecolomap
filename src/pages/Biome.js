import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Search from '../components/Search';
import Biomes from '../components/Biomes';
import Wave from '../components/Wave';
import Cloud from '../components/Cloud';
import Mountain from '../components/Mountain';
import { withContext } from '../Provider';
import { visible } from '../lib/animation';
import sleep from '../lib/utils';

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

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 3.4rem;
  height: calc(100% - 3.4rem);
  width: 100%;
  background-image: linear-gradient(white, #01e0ff);
  z-index: 0 !important;
`;

const PosedVisibleWrapper = posed.div(visible);

class Biome extends React.Component {
  componentDidMount() {
    const { setPose } = this.props;
    sleep(500).then(() => setPose('start'));
  }

  render = () => {
    const { pose, land } = this.props;
    return (
      <>
        <PosedVisibleWrapper pose={pose}>
          <StyledBackground />
        </PosedVisibleWrapper>
        <StyledHero>
          <Search />
        </StyledHero>
        <PosedVisibleWrapper pose={pose}>
          <StyledTitle>{land}</StyledTitle>
          <StyledSubtitle>
            Cliquez sur les différents éléments pour voir les détails
          </StyledSubtitle>
          <Cloud />
          <Mountain />
          <Biomes />
          <Wave />
        </PosedVisibleWrapper>
      </>
    );
  };
}

export default withContext('land', 'pose', 'setPose')(Biome);
