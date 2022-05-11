import { ImLiveActionTypes, POST_IMLIVE } from './ImLiveActionTypes';
import { ImLive } from 'app/feature/UploadFiles/models/ImLive';
import { ImLiveRepository } from 'app/core/api/imLive.repository';
import { Session } from 'app/feature/Login/models/Session';

export function postImLive(): ImLiveActionTypes {
  return {
    type: POST_IMLIVE,
    payload: {},
  };
}

export function postImLiveAsync(imLive: ImLive, session: Session) {
  return function (dispacth: any) {
    return ImLiveRepository.postImLive(imLive, session).then(
      dispacth(
        postImLive()
      )
    );
  };
}
