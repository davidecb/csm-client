import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeaderNav } from './styles';
import Logo3D from 'assets/img/logoHeader.png';
import { NavBrand } from '../../components/NavBrand';
import { NavDatePicker } from '../../components/NavDatePicker';
import { NavList } from '../../components/NavList';
import { Session } from 'app/feature/Login/models/Session';
import navOptions from '../../models/navOptions';
import { useHistory } from 'react-router-dom';

interface HeaderManageProps {
  session: Session;
  startDate: Date;
  endDate: Date;
  logoutSession: (session: Session) => void;
  validateSession: (session: Session) => any;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

export const HeaderManage: React.FC<HeaderManageProps> = ({
  session,
  startDate,
  endDate,
  logoutSession,
  setStartDate,
  setEndDate,
  validateSession,
}) => {  
  const history = useHistory();
  const [currentLink, setCurrentLink] = useState('');

  useEffect(() => {
    validateSession(session).then((isSessionOk: boolean) => {
      if (!isSessionOk) {
        return history.push('/login');
      }      
    }).catch((err: any) => {
      console.log('@err:', err);
    });
  }, []);
  
  useEffect(() => {
    if (currentLink === 'Salir') {
      logoutSession(session);
      return history.push('/login');
    }  
  }, [currentLink]);

  const routes = navOptions.filter((option) => {
    if(option.role.includes(session.user.role)){
      return true;
    }
    else return false;
  });

  return (
    <HeaderNav>
      <NavBrand imgSrc={Logo3D} text="CSM"></NavBrand>
      <NavList items={routes} setCurrentLink={setCurrentLink} />
      <NavDatePicker 
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
      />
    </HeaderNav>
  );
};

HeaderManage.propTypes = {
  session: PropTypes.any.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  logoutSession: PropTypes.func.isRequired,
  validateSession: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
};
