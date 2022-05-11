import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { PerformersManageProvider } from '../hoc/PerformersManage.provider';
import { RouteComponentProps } from 'react-router-dom';

const PerformersPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Modelos" description="Gestión de Modelos">
      <PerformersManageProvider/>
    </Layout>
  );
};

PerformersPage.displayName = 'PerformersPage';

export default PerformersPage;
