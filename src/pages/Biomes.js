import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Search from '../components/Search';
import Biome from '../components/Biome';
import { withContext } from '../Provider';
import { visible } from '../lib/animation';
import sleep from '../lib/utils';

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

class Biomes extends React.Component {
  componentDidMount() {
    const { setPose } = this.props;
    sleep(500).then(() => setPose('start'));
  }

  render = () => {
    const { pose } = this.props;
    return (
      <>
        <PosedVisibleWrapper pose={pose}>
          <StyledBackground />
        </PosedVisibleWrapper>
        <StyledHero>
          <Search />
        </StyledHero>
        <PosedVisibleWrapper pose={pose}>
          <Biome />
        </PosedVisibleWrapper>
      </>
    );
  };
}

export default withContext('pose', 'setPose')(Biomes);
