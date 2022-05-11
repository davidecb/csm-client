import { AxiosRequestConfig } from 'axios';
import { Session } from 'app/feature/Login/models/Session';
import { Streamate } from 'app/feature/UploadFiles/models/Streamate';
import { axiosInstance } from '../config/AxiosConfig';

export const StreamateRepository = {
  getStreamates: async (session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.get('/streamate', axiosConfig).then((response) => {
      return  response.data;
    }).catch((err) => {
      return [];
    });
  },
  postStreamate: async (streamate: Streamate, session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.post('/streamate', streamate, axiosConfig).then((response) => {      
      return  response;
    }).catch((err) =>{
      return err;
    });
  },
};
