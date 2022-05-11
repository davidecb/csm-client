import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './feature/Login/pages/Main';
import MainPage from './Main';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};
