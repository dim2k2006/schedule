import head from 'lodash/head';
import tail from 'lodash/tail';
import reverse from 'lodash/reverse';
import genSchedulePerSubject from '../genSchedulePerSubject';

const genSchedule = (days, subjects, lessonsPerDay) => {
  if (!subjects.length) return days;

  const newDays = genSchedulePerSubject(days, head(subjects), lessonsPerDay);

  return genSchedule(reverse(newDays), tail(subjects), lessonsPerDay);
};

export default genSchedule;
