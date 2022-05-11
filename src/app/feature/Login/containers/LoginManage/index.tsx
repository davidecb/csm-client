import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Login } from '../../models/Login';
import { LoginContainer} from './styles';
import { LoginForm } from '../../components/LoginForm';
import { Session } from '../../models/Session';
import { WelcomeMessage } from '../../components/WelcomeMessage';
import { useHistory } from 'react-router-dom';

interface LoginManageProps {
  session: Session;
  loginSession: (login: Login) => any;
  validateSession: (session: Session) => any;
}

export const LoginManage: React.FC<LoginManageProps> = ({
  session,
  loginSession,
  validateSession,
}) => {  
  const history = useHistory();
  const [ validLogin, setValidLogin ] = useState(false);
  useEffect(() => {
    validateSession(session).then((isSessionOk: boolean) => {
      if (isSessionOk) {
        setValidLogin(true);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      } else {
        setValidLogin(false);
      }   
    }).catch((err: any) => {
      console.log('@err:', err);
    });
  }, [session]);

  return (
    <LoginContainer>
      { !validLogin && (
        <LoginForm onSubmit={loginSession} session={session} />
      )}
      { validLogin && (
        <WelcomeMessage user={session.user} />
      )}
    </LoginContainer>
  );
};

LoginManage.propTypes = {
  session: PropTypes.any.isRequired,
  loginSession: PropTypes.func.isRequired,
  validateSession: PropTypes.func.isRequired,
};
