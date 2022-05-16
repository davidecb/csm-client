import {
  addPlatformNameAsync,
  getPerformersAsync,
  getPerformersTotalsAsync,
} from 'app/core/redux/actions/performers/PerformersActions';
import {
  deleteNoteAsync,
  postNoteAsync,
} from 'app/core/redux/actions/note/NoteActions';
import { GeneralState } from 'app/core/redux/models/GeneralState';
import { PerformersManage } from '../containers/PerformersManage';
import { connect } from 'react-redux';

const mapStateToProps = (state: GeneralState) => {
  return {
    session: state.session.session,
    performersTotals: state.performers.performersTotals,
    performers: state.performers.performers,
    startDate: state.session.startDate,
    endDate: state.session.endDate,
  };
};

export const PerformersManageProvider = connect(mapStateToProps, {
  getPerformersTotals: getPerformersTotalsAsync,
  getPerformers: getPerformersAsync,
  addPlatformName: addPlatformNameAsync,
  addNote: postNoteAsync,
  deleteNote: deleteNoteAsync,
})(PerformersManage);
