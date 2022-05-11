import * as React from 'react';
import { HeaderManageProvider } from '../hoc/HeaderManage.provider';
import { RouteComponentProps } from 'react-router-dom';

const HeaderNav: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <HeaderManageProvider/>
    </div>
  );
};

HeaderNav.displayName = 'HeaderNav';

export default HeaderNav;
