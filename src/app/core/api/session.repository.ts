import { AxiosRequestConfig } from 'axios';
import { Login } from 'app/feature/Login/models/Login';
import { Session } from 'app/feature/Login/models/Session';
import { axiosInstance } from '../config/AxiosConfig';

export const SessionRepository = {
  login: async (login: Login) => {
    return await axiosInstance.post('/user/login', {
      username: login.username,
      password: login.password
    }).then((response) => {
      localStorage.setItem('jwtToken', response.data.token);
      const userString = JSON.stringify(response.data.user); 
      localStorage.setItem('user', userString);
      return  response.data;
    }).catch((err) =>{
      return {
        token: 'Error',
        user: err.response.data,
      };
    });
  },
  logout: async (session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    await axiosInstance.post('/user/logout', {}, axiosConfig);
    localStorage.setItem('jwtToken', '');
    localStorage.setItem('user', '{}');
    return {
      token: '',
      user: {}
    };
  },
  validate: async (session: Session): Promise<Session> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Authorization': `Bearer ${session.token}`,
      }
    };
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const body = {
      username: user.username,
      id: user._id,
    };
    return await axiosInstance.post('/user/me/validate', body, axiosConfig)
    .then((res) => session)
    .catch((err) => {
      localStorage.setItem('jwtToken', '');
      localStorage.setItem('user', '{}');
      throw new Error('Unauthorized');
    });
  },
};
