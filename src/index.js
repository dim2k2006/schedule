import getSubjects from './utils/getSubjects';
import getSubjectsPerMonth from './utils/getSubjectsPerMonth';
import getDaysPerMonth from './utils/getDaysPerMonth';
import genSchedule from './utils/genSchedule';

export default (subjects = [], userConfig = {}) => {
  const defaultConfig = {
    EDUCATION_DAYS_PER_MONTH: 12,
    EDUCATION_TIME_PER_MONTH_IN_HOURS: 48,
    LESSON_DURATION_IN_MINUTES: 60,
    LESSONS_PER_DAY: 4,
  };

  const config = { ...defaultConfig, ...userConfig };

  const EDUCATION_TIME_PER_MONTH_IN_MINUTES = config.EDUCATION_TIME_PER_MONTH_IN_HOURS * 60;

  const subjectsWithData = getSubjects(
    subjects,
    EDUCATION_TIME_PER_MONTH_IN_MINUTES,
    config.LESSON_DURATION_IN_MINUTES,
  );

  const subjectsPerMonth = getSubjectsPerMonth(subjectsWithData);

  const daysPerMonth = getDaysPerMonth(config.EDUCATION_DAYS_PER_MONTH);

  return genSchedule(daysPerMonth, subjectsPerMonth, config.LESSONS_PER_DAY);
};
