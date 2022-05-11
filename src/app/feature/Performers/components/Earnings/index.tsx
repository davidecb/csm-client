import { formatNumber } from 'app/shared/utils/formaters';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ImCoinDollar } from 'react-icons/im';
import { Wrapper } from './styles';


interface EarningsProps {
  earnings: {
    total: number,
    camsoda?: number,
    imlive?: number,
    livejasmin?: number,
    streamate?: number,
    platforms?: object,
    locations?: object,
  }
}

export const Earnings: React.FC<EarningsProps> = ({ earnings }) => (
  <Wrapper>
    <div className="iconContainer">
      <ImCoinDollar className='moneyIcon' />
    </div>
    <span>$ {formatNumber(earnings.total, 2)}</span>
  </Wrapper>
);

Earnings.propTypes = {
  earnings: PropTypes.shape({
    total: PropTypes.number.isRequired,
    camsoda: PropTypes.any,
    imlive: PropTypes.any,
    livejasmin: PropTypes.any,
    streamate: PropTypes.any,
    platforms: PropTypes.any,
    locations: PropTypes.any,
  }).isRequired,
};
