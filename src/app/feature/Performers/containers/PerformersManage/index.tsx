import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'app/shared/components/Loading';
import { Note } from '../../models/Note';
import { Performer } from '../../models/Performer';
import { PerformerCard } from '../../components/PerformerCard';
import { PerformerTotals } from '../../models/PerformerTotals';
import { PerformersContainer } from './styles';
import { Session } from 'app/feature/Login/models/Session';
import { calcWorkingHours } from 'app/shared/utils/formaters';
interface PerformersManageProps {
  session: Session;
  performersTotals: PerformerTotals[] | undefined;
  performers: Performer[] | undefined;
  startDate: Date;
  endDate: Date;
  getPerformersTotals: (
    session: Session,
    startDate: Date,
    endDate: Date
  ) => any;
  getPerformers: (session: Session) => any;
  addPlatformName: (session: Session, id: string, platformName: string) => any;
  addNote: (note: Note, session: Session) => any;
  deleteNote: (id: string, session: Session) => any;
}

export const PerformersManage: React.FC<PerformersManageProps> = ({
  performersTotals,
  performers,
  session,
  startDate,
  endDate,
  getPerformersTotals,
  getPerformers,
  addPlatformName,
  addNote,
  deleteNote,
}) => {
  const [workingHours, setWorkingHours] = useState(
    calcWorkingHours(startDate, endDate)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const getTotals = async () => {
      setIsLoading(true);
      setWorkingHours(calcWorkingHours(startDate, endDate));
      getPerformersTotals(session, startDate, endDate)
        .then(() => {
          setIsLoading(false);
        })
        .catch((err: any) => {
          window.alert('Algo salio mal.' + err);
        });
    };
    getTotals();
  }, [startDate, endDate, refresh]);

  return (
    <PerformersContainer>
      {isLoading && <Loading />}
      {!isLoading &&
        performersTotals?.map(
          (performerTotals: PerformerTotals, index: number) => {
            return (
              <PerformerCard
                key={index}
                performerTotals={performerTotals}
                performers={performers}
                workingHours={workingHours}
                getPerformers={() => getPerformers(session)}
                addPlatformName={(id: string, platformName: string) =>
                  addPlatformName(session, id, platformName)
                }
                addNote={(newNote: Note) => {
                  newNote.createdBy =
                    session.user.role === 'monitor'
                      ? session.user.username
                      : session.user.name;
                  addNote(newNote, session);
                  setRefresh(!refresh);
                }}
                deleteNote={(id: string) => {
                  deleteNote(id, session);
                  setRefresh(!refresh);
                }}
                role={session.user.role}
              />
            );
          }
        )}
    </PerformersContainer>
  );
};

PerformersManage.propTypes = {
  performersTotals: PropTypes.array.isRequired,
  performers: PropTypes.array.isRequired,
  session: PropTypes.any.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  getPerformersTotals: PropTypes.func.isRequired,
  getPerformers: PropTypes.func.isRequired,
  addPlatformName: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
