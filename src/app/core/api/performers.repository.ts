import { AxiosRequestConfig } from 'axios';
import { PerformerTotals } from 'app/feature/Performers/models/PerformerTotals';
import { Session } from 'app/feature/Login/models/Session';
import { axiosInstance } from '../config/AxiosConfig';

export const PerformersRepository = {
  getPerformers: async (session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
    return await axiosInstance
      .get('/performer/info', axiosConfig)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return [];
      });
  },
  getPerformersTotals: async (
    session: Session,
    startDate: Date,
    endDate: Date
  ): Promise<PerformerTotals[]> => {
    startDate.setHours(startDate.getHours() - 5);
    endDate.setHours(endDate.getHours() - 5);
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
    return axiosInstance
      .get(
        `/performer/totals?from=${startDate.toISOString().split('T')[0]}&to=${
          endDate.toISOString().split('T')[0]
        }`,
        axiosConfig
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return [];
      });
  },
  addPlatformName: async (
    session: Session,
    id: string,
    platformName: string
  ) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
    return await axiosInstance
      .patch(`/performer/addtag?id=${id}`, { platformName }, axiosConfig)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return {};
      });
  },
};
