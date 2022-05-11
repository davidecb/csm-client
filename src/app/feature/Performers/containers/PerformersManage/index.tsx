import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'app/shared/components/Loading';
import { Performer } from '../../models/Performer';
import { PerformerCard } from '../../components/PerformerCard';
import { PerformerTotals } from '../../models/PerformerTotals';
import { PerformersContainer } from './styles';
import { Session } from 'app/feature/Login/models/Session';
import {  calcWorkingHours} from 'app/shared/utils/formaters';
interface PerformersManageProps {
  session: Session;
  performersTotals: PerformerTotals[] | undefined;
  performers: Performer[] | undefined;
  startDate: Date;
  endDate: Date;
  getPerformersTotals: (session: Session, startDate: Date, endDate: Date) => any;
  getPerformers: (session: Session) => any;
  addPlatformName: (session: Session, id: string, platformName: string) => any;
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
}) => {
  const [workingHours, setWorkingHours] = useState(calcWorkingHours(startDate, endDate));
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getTotals = async () => {
      setIsLoading(true);
      setWorkingHours(calcWorkingHours(startDate, endDate));
      getPerformersTotals(session, startDate, endDate).then(() => {
        setIsLoading(false);
      }).catch((err: any) => {
        window.alert('Algo salio mal.' + err);
      });      
    };
    getTotals();
  }, [startDate, endDate]);

  return (
    <PerformersContainer>
      {isLoading && <Loading />}
      {!isLoading && performersTotals?.map((performerTotals: PerformerTotals, index: number) => {
        return(
          <PerformerCard
            key={index}
            performerTotals={performerTotals}
            performers={performers}
            workingHours={workingHours}
            getPerformers={() => getPerformers(session)}
            addPlatformName={
              (id: string, platformName: string) => addPlatformName(session, id, platformName)
            }
          />
        );
      })}
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
};
