import React from 'react';
import styled from 'styled-components';
import Logo from '../static/svg/logo.svg';

const StyledLogo = styled(Logo)`
  width: 20rem;
  margin: 0 auto;
`;

export default () => <StyledLogo />;
