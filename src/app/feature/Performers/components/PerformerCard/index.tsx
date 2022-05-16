import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Earnings } from '../Earnings';
import { Note } from '../../models/Note';
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
  role: string;
  getPerformers: () => any;
  addPlatformName: (id: string, platformName: string) => any;
  addNote: (newNote: Note) => void;
  deleteNote: (id: string) => void;
}

export const PerformerCard: React.FC<PerformerCardProps> = ({
  performerTotals,
  performers,
  workingHours,
  role,
  getPerformers,
  addPlatformName,
  addNote,
  deleteNote,
}) => {
  const blocked = performerTotals.personalInfo.location === 'desconocida';

  return (
    <PerformerCardDiv>
      <PersonalInfo
        personalInfo={performerTotals.personalInfo}
        performers={performers}
        getPerformers={getPerformers}
        addPlatformName={addPlatformName}
      />
      <Earnings earnings={performerTotals.earnings} />
      <Notes
        performerName={performerTotals.personalInfo.performerName}
        performerId={performerTotals.personalInfo.id}
        notes={performerTotals.notes}
        blocked={blocked}
        addNote={addNote}
        deleteNote={deleteNote}
        role={role}
      />
      <Times time={performerTotals.time} workingHours={workingHours} />
    </PerformerCardDiv>
  );
};

PerformerCard.propTypes = {
  performerTotals: PropTypes.any.isRequired,
  performers: PropTypes.any,
  workingHours: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  getPerformers: PropTypes.func.isRequired,
  addPlatformName: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
