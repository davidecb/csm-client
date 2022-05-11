import { AxiosRequestConfig } from 'axios';
import { Camsoda } from 'app/feature/UploadFiles/models/Camsoda';
import { Session } from 'app/feature/Login/models/Session';
import { axiosInstance } from '../config/AxiosConfig';

export const CamsodaRepository = {
  getCamsodas: async (session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.get('/camsoda', axiosConfig).then((response) => {
      console.log('@camsodas:', response.data);
      return  response.data;
    }).catch((err) => {
      return [];
    });
  },
  postCamsoda: async (camsoda: Camsoda, session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    return await axiosInstance.post('/camsoda', camsoda, axiosConfig).then((response) => {      
      return  response;
    }).catch((err) =>{
      return err;
    });
  },
};
