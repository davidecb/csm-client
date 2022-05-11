import * as PropTypes from 'prop-types';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import { NavDatePickerContainer } from './styles';

interface NavDatePickerProps {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

export const NavDatePicker: React.FC<NavDatePickerProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [dateRange, setDateRange] = React.useState([startDate, endDate]);
  const [start, end] = dateRange;

  const handleChange = (update: [Date, Date]) => {
    const [ startDt, endDt ] = update;
    if (endDt) {
      startDt.setHours(startDt.getHours() + 5);
      endDt.setHours(endDt.getHours() + 5);
      setStartDate(startDt);
      setEndDate(endDt);
    }
    setDateRange(update);
  };

  return (
    <NavDatePickerContainer>
      <DatePicker
        selectsRange={true}
        startDate={start}
        endDate={end}
        onChange={handleChange}
        withPortal
      />
    </NavDatePickerContainer>
  );
};

NavDatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
};
