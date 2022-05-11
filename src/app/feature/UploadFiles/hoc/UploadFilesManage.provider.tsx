import { GeneralState } from 'app/core/redux/models/GeneralState';
import { UploadFilesManage } from '../containers/UploadFilesManage';
import { connect } from 'react-redux';
import { postCamsodaAsync } from 'app/core/redux/actions/camsoda/CamsodaActions';
import { postImLiveAsync } from 'app/core/redux/actions/imLive/ImLiveActions';
import { postStreamateAsync } from 'app/core/redux/actions/streamate/StreamateActions';

const mapStateToProps = (state: GeneralState) => {
  return {
    session: state.session.session,
  };
};

export const UploadFilesManageProvider = connect(mapStateToProps, {
  postStreamate: postStreamateAsync,
  postCamsoda: postCamsodaAsync,
  postImLive: postImLiveAsync,
})(UploadFilesManage);
