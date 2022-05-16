import { AxiosRequestConfig } from 'axios';
import { Note } from 'app/feature/Performers/models/Note';
import { Session } from 'app/feature/Login/models/Session';
import { axiosInstance } from '../config/AxiosConfig';

export const NoteRepository = {
  postNote: async (note: Note, session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
    return await axiosInstance
      .post('/note', note, axiosConfig)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteNote: async (id: string, session: Session) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
    return await axiosInstance
      .delete(`/note/delete/${id}`, axiosConfig)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return [];
      });
  },
};
