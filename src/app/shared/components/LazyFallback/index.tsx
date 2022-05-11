import * as React from 'react';
import { Div } from './styles';
import { Loading } from '../Loading';

export const LazyFallback = () => (
  <Div>
    <Loading />
  </Div>
);
