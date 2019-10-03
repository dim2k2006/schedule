import head from 'lodash/head';
import tail from 'lodash/tail';
import flattenDeep from 'lodash/flattenDeep';
import compact from 'lodash/compact';

const genSchedule = (days = [], subjects = [], lessonsPerDay) => {
  if (!days.length) return null;

  const day = head(days);
  const daySubjects = subjects.slice(0, lessonsPerDay);
  const newDay = {
    ...day,
    subjects: daySubjects,
  };

  const flattenData = flattenDeep([newDay, genSchedule(tail(days), subjects.slice(lessonsPerDay), lessonsPerDay)]);

  return compact(flattenData);
};

export default genSchedule;
