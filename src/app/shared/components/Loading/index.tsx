import * as React from 'react';
import { LoadingWrapper, LogoImg } from './styles';
import { BlockedWindow } from '../BlockedWindow';
import LoadingIcon from 'assets/img/loading_icon.png';

export const Loading = () => (
  <BlockedWindow>
    <LoadingWrapper>
      <LogoImg src={LoadingIcon} alt="loading..."></LogoImg>
    </LoadingWrapper>
  </BlockedWindow>
);
