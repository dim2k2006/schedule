import head from 'lodash/head';
import tail from 'lodash/tail';

const genSchedulePerSubject = (days, subjects, lessonsPerDay) => {
  const daysLength = days.length;

  const iter = (daysList, currentDayId, subjectsList) => {
    if (!subjectsList.length) return daysList;

    if (daysList.every((d) => d.subjects.length === lessonsPerDay)) return daysList;

    const newId = (currentDayId === daysLength - 1) ? 0 : currentDayId + 1;

    const day = daysList[currentDayId];

    if (day.subjects.length === lessonsPerDay) return iter(daysList, newId, subjectsList);

    const subject = head(subjectsList);

    const newDays = daysList.map((d) => {
      if (d.id !== day.id) return d;

      return {
        ...d,
        subjects: [...d.subjects, subject],
      };
    });

    return iter(newDays, newId, tail(subjectsList));
  };

  return iter(days, 0, subjects);
};

export default genSchedulePerSubject;
