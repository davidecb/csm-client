import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { LoginManageProvider } from '../hoc/LoginManage.provider';
import { RouteComponentProps } from 'react-router-dom';

const LoginPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Login" description="Gestión de Login">
      <LoginManageProvider/>
    </Layout>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
