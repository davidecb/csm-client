import * as React from 'react';
import { LoadingWrapper, LogoImg } from './styles';
import LoadingIcon from 'assets/img/loading_icon.png';

export const Loading = () => (
  <LoadingWrapper>
    <LogoImg src={LoadingIcon} alt='loading...'></LogoImg>
  </LoadingWrapper>
);
