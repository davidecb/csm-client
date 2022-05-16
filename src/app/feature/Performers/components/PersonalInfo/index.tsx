import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FcCancel, FcOk } from 'react-icons/fc';
import { PerformerConnect, Wrapper } from './styles';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { Performer } from '../../models/Performer';
import { Select } from 'app/shared/components/Select';
import { useState } from 'react';

interface PersonalInfoProps {
  personalInfo: {
    performerName: string;
    location: string;
    performerShift: string;
  };
  performers: Performer[] | undefined;
  getPerformers: () => any;
  addPlatformName: (id: string, platformName: string) => any;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  personalInfo,
  performers,
  getPerformers,
  addPlatformName,
}) => {
  const [showConnect, setShowConnect] = useState(
    personalInfo.location === 'desconocida'
  );
  const [showPerformers, setShowPerformers] = useState(false);
  const [performerConnect, setPerformerConnect] = useState('');

  const showPerformersHandler = () => {
    getPerformers();
    setShowPerformers(true);
    console.log(performers);
  };

  const handleConnect = () => {
    addPlatformName(performerConnect, personalInfo.performerName);
    setShowPerformers(false);
    setShowConnect(false);
  };
  return (
    <Wrapper>
      <h2>{personalInfo.performerName}</h2>
      <h3>{personalInfo.location}</h3>
      <h3>{personalInfo.performerShift}</h3>
      {showConnect && !showPerformers && (
        <div>
          <VscDebugDisconnect
            className="icon"
            onClick={showPerformersHandler}
          />
        </div>
      )}
      {showConnect && showPerformers && performers && (
        <PerformerConnect>
          <Select onChange={(e) => setPerformerConnect(e.target.value)}>
            <option>Modelos:</option>
            {performers
              .sort((a: Performer, b: Performer) => {
                if (a.performerName < b.performerName) {
                  return -1;
                } else if (a.performerName > b.performerName) {
                  return 1;
                } else return 0;
              })
              .map((performer, index) => {
                return (
                  <option key={index} value={performer._id}>
                    {performer.performerName}
                  </option>
                );
              })}
          </Select>
          <FcCancel className="icon" onClick={() => setShowPerformers(false)} />
          <FcOk className="icon" onClick={handleConnect} />
        </PerformerConnect>
      )}
    </Wrapper>
  );
};

PersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    performerName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    performerShift: PropTypes.string.isRequired,
  }).isRequired,
  performers: PropTypes.any,
  getPerformers: PropTypes.func.isRequired,
  addPlatformName: PropTypes.func.isRequired,
};
