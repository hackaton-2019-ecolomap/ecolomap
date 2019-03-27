import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Logo from '../components/Logo';
import Search from '../components/Search';
import Map from '../components/Map';
import Footer from '../components/Footer';
import { withContext } from '../Provider';
import { bottomToTop, invisible } from '../lib/animation';
import sleep from '../lib/utils';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

const PosedInvisibleWrapper = posed.div(invisible);
const PosedSearchWrapper = posed.div(bottomToTop);

class Home extends React.Component {
  componentDidMount() {
    const { setPose, setCauses } = this.props;
    setCauses(null);
    setPose('end');
    sleep(500).then(() => setPose('start'));
  }

  render = () => {
    const { pose } = this.props;
    return (
      <>
        <StyledHero>
          <PosedInvisibleWrapper pose={pose}>
            <Logo />
          </PosedInvisibleWrapper>
          <PosedSearchWrapper pose={pose}>
            <Search />
          </PosedSearchWrapper>
        </StyledHero>
        <PosedInvisibleWrapper pose={pose}>
          <Map />
          <Footer />
        </PosedInvisibleWrapper>
      </>
    );
  };
}

export default withContext('pose', 'setPose', 'setCauses')(Home);
