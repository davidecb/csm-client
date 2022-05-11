import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Earnings } from '../Earnings';
import { Notes } from '../Notes';
import { Performer } from '../../models/Performer';
import { PerformerCardDiv } from './styles';
import { PerformerTotals } from '../../models/PerformerTotals';
import { PersonalInfo } from '../PersonalInfo';
import { Times } from '../Times';

interface PerformerCardProps {
  performerTotals: PerformerTotals;
  performers: Performer[] | undefined;
  workingHours: number;
  getPerformers: () => any;
  addPlatformName: (id: string, platformName: string) => any;
}

export const PerformerCard: React.FC<PerformerCardProps> = ({
  performerTotals,
  performers,
  workingHours,
  getPerformers,
  addPlatformName,
}) => (
  <PerformerCardDiv>
    <PersonalInfo
      personalInfo={performerTotals.personalInfo}
      performers={performers}
      getPerformers={getPerformers}
      addPlatformName={addPlatformName}
    />
    <Earnings earnings={performerTotals.earnings} />
    <Notes />
    <Times 
      time={performerTotals.time}
      workingHours={workingHours}
    />
  </PerformerCardDiv>
);

PerformerCard.propTypes = {
  performerTotals: PropTypes.any.isRequired,
  performers: PropTypes.any,
  workingHours: PropTypes.number.isRequired,
  getPerformers: PropTypes.func.isRequired,
  addPlatformName: PropTypes.func.isRequired,
};
