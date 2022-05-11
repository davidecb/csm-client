import { POST_STREAMATE, StreamateActionTypes } from './StreamateActionTypes';
import { Session } from 'app/feature/Login/models/Session';
import { Streamate } from 'app/feature/UploadFiles/models/Streamate';
import { StreamateRepository } from 'app/core/api/streamate.repository';

export function postStreamate(): StreamateActionTypes {
  return {
    type: POST_STREAMATE,
    payload: {},
  };
}

export function postStreamateAsync(streamate: Streamate, session: Session) {
  return function (dispacth: any) {
    return StreamateRepository.postStreamate(streamate, session).then(
      dispacth(
        postStreamate()
      )
    );
  };
}
