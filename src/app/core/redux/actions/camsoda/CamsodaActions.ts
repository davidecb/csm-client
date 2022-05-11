import { CamsodaActionTypes, POST_CAMSODA } from './CamsodaActionTypes';
import { Camsoda } from 'app/feature/UploadFiles/models/Camsoda';
import { CamsodaRepository } from 'app/core/api/camsoda.repository';
import { Session } from 'app/feature/Login/models/Session';

export function postCamsoda(): CamsodaActionTypes {
  return {
    type: POST_CAMSODA,
    payload: {},
  };
}

export function postCamsodaAsync(camsoda: Camsoda, session: Session) {
  return function (dispacth: any) {
    return CamsodaRepository.postCamsoda(camsoda, session).then(
      dispacth(
        postCamsoda()
      )
    );
  };
}
