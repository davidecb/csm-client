import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeaderRouter } from './shared/components/Header/HeaderRouter';
import { HomeRouter } from './feature/Home/HomeRouter';
import { PerformersRouter } from './feature/Performers/PerformersRouter';
import { UploadFilesRouter } from './feature/UploadFiles/UploadFilesRouter';

const MainPage = () => (
  <div className='main-router-dom'>
    <HeaderRouter /> 
    <Switch>
      <Route path="/" exact component={HomeRouter} />
      <Route path="/management" component={PerformersRouter} />
      <Route path="/upload-files" component={UploadFilesRouter} />
    </Switch>
  </div>
);

export default MainPage;
