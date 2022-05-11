import { loginSessionAsync, validateSessionAsync } from 'app/core/redux/actions/session/SessionActions';
import { GeneralState } from 'app/core/redux/models/GeneralState';
import { LoginManage } from '../containers/LoginManage';
import { connect } from 'react-redux';

const mapStateToProps = (state: GeneralState) => {
  return {
    session: state.session.session,
  };
};

export const LoginManageProvider = connect(mapStateToProps, {
  loginSession: loginSessionAsync,
  validateSession: validateSessionAsync,
})(LoginManage);
