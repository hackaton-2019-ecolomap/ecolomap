import React from 'react';
import styled from 'styled-components';
import Montagnes from '../static/svg/montagnes.svg';

const StyledMountain = styled(Montagnes)`
  position: absolute;
  bottom: 0;
`;

const Mountain = () => <StyledMountain />;

export default Mountain;
