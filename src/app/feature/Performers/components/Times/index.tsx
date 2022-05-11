import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FcApproval, FcHighPriority } from 'react-icons/fc';
import { calculatePercent, timeInHMS } from 'app/shared/utils/formaters';
import { FaFlagCheckered } from 'react-icons/fa';
import { Wrapper } from './styles';

interface TimesProps {
  time: {
    total: number,
    camsoda?: number,
    imlive?: number,
    livejasmin?: number,
    streamate?: number,
    platforms?: object,
    locations?: object,
  },
  workingHours: number,
}

export const Times: React.FC<TimesProps> = ({ time, workingHours }) => {
  const isGoalReached = ((time.total / 3600) >= workingHours);
  return (
    <Wrapper isGoalReached={ isGoalReached } >
      <div>
        {isGoalReached && <FcApproval className='goalIcon' /> }
        {!isGoalReached && <FcHighPriority className='goalIcon' />}                
      </div>    
      <div>{calculatePercent(time.total, workingHours)} %</div>
      <div>{timeInHMS(time.total)}</div>
      <div className='goalContainer'>
        <FaFlagCheckered />    
        <div>{workingHours} H</div>    
      </div>    
    </Wrapper>
  );
};

Times.propTypes = {
  time: PropTypes.shape({
    total: PropTypes.number.isRequired,
    camsoda: PropTypes.any,
    imlive: PropTypes.any,
    livejasmin: PropTypes.any,
    streamate: PropTypes.any,
    platforms: PropTypes.any,
    locations: PropTypes.any,
  }).isRequired,
  workingHours: PropTypes.number.isRequired,
};
