import { AxiosRequestConfig } from 'axios';
import { ImLive } from 'app/feature/UploadFiles/models/ImLive';
import { Session } from 'app/feature/Login/models/Session';
import { axiosInstance } from '../config/AxiosConfig';

export const ImLiveRepository = {
  getImLives: async (session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.get('/imlive', axiosConfig).then((response) => {
      return  response.data;
    }).catch((err) => {
      return [];
    });
  },
  postImLive: async (imLive: ImLive, session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.post('/imLive', imLive, axiosConfig).then((response) => {      
      return  response;
    }).catch((err) =>{
      return err;
    });
  },
};
