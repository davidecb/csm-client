export interface Note {
  _id?: string;
  type: string;
  performer: string;
  createdBy: string;
  date: Date;
  remarks?: {
    days: number;
  };
}
