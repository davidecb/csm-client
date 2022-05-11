import {
  logoutSessionAsync,
  setEndDateAsync,
  setStartDateAsync,
  validateSessionAsync
} from 'app/core/redux/actions/session/SessionActions';
import { GeneralState } from 'app/core/redux/models/GeneralState';
import { HeaderManage } from '../containers/HeaderManage';
import { connect } from 'react-redux';

const mapStateToProps = (state: GeneralState) => {
  return {
    session: state.session.session,
    startDate: state.session.startDate,
    endDate: state.session.endDate,
  };
};

export const HeaderManageProvider = connect(mapStateToProps, {
  logoutSession: logoutSessionAsync,
  validateSession: validateSessionAsync,
  setStartDate: setStartDateAsync,
  setEndDate: setEndDateAsync,
})(HeaderManage);
