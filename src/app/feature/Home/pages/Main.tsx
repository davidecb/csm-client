import * as React from 'react';
import { ExternalWebSite } from '../components/ExternalWebSite';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Home" description="Home page de la aplicación">
      <ExternalWebSite url="https://csmodelsociety.com" /> 
    </Layout>
  );
};
HomePage.displayName = 'HomePage';

export default HomePage;
