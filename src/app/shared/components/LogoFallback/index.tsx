import * as React from 'react';
import { Div, LogoImg } from './styles';
import Logo3D from 'assets/img/logoHeader.png';

export const LogoFallback = () => (
  <Div>
    <LogoImg src={Logo3D} alt='CSM'></LogoImg>
  </Div>
);
