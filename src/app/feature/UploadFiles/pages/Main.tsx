import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { UploadFilesManageProvider } from '../hoc/UploadFilesManage.provider';

const UploadFilesPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="UploadFiles" description="Gestión de UploadFiles">
      <UploadFilesManageProvider/>
    </Layout>
  );
};

UploadFilesPage.displayName = 'UploadFilesPage';

export default UploadFilesPage;
