export const timeInHMS = (seconds: number) => {
  const timeHMS = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  timeHMS.hours = Math.floor(seconds / 3600);
  timeHMS.minutes = Math.floor((seconds - timeHMS.hours * 3600) / 60);
  timeHMS.seconds = seconds - timeHMS.hours * 3600 - timeHMS.minutes * 60;

  return (
    timeHMS.hours.toString().padStart(2, '0') +
    ':' +
    timeHMS.minutes.toString().padStart(2, '0') +
    ':' +
    timeHMS.seconds.toString().padStart(2, '0')
  );
};

export const formatNumber = (number: number, decimals = 0) => {
  return number.toLocaleString('en-EN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
};

export const calcWorkingHours = (fromDate: Date, toDate: Date) => {
  const fromDateNum = fromDate.getTime();
  const toDateNum = toDate.getTime();
  const datesDiff = toDateNum - fromDateNum;
  const milisecondsToDays = 1000 * 60 * 60 * 24;
  const daysBetween = datesDiff / milisecondsToDays + 1;
  const workingHours = daysBetween * 5.714;
  return workingHours;
};

export const calculatePercent = (time: number, workingHours: number) => {
  const timeInHours = time / 3600;
  const percent = (timeInHours * 100) / workingHours;
  return percent.toFixed(0);
};

export const getWeekStart = (dateOfWeek = Date.now()) => {
  const date = new Date(dateOfWeek);
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }
  return date;
};
