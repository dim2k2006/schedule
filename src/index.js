import getSubjects from './utils/getSubjects';
import getSubjectsPerMonth from './utils/getSubjectsPerMonth';
import getDaysPerMonth from './utils/getDaysPerMonth';
import sort from './utils/sort';
import genSchedule from './utils/genSchedule';

export default (subjects = [], userConfig = {}) => {
  const defaultConfig = {
    SUBJECTS_PERCENTAGE_LIMIT: 100,
    EDUCATION_DAYS_PER_MONTH: 12,
    EDUCATION_TIME_PER_MONTH_IN_HOURS: 48,
    LESSON_DURATION_IN_MINUTES: 60,
    LESSONS_PER_DAY: 4,
  };

  const config = { ...defaultConfig, ...userConfig };

  const EDUCATION_TIME_PER_MONTH_IN_MINUTES = config.EDUCATION_TIME_PER_MONTH_IN_HOURS * 60;

  const subjectsPercentageSum = subjects
    .reduce((accumulator, subject) => accumulator + subject.percentage, 0);

  if (subjectsPercentageSum !== config.SUBJECTS_PERCENTAGE_LIMIT) {
    throw new Error(`Subjects percentage sum can not be greater then ${config.SUBJECTS_PERCENTAGE_LIMIT}`);
  }

  const subjectsWithData = getSubjects(
    subjects,
    EDUCATION_TIME_PER_MONTH_IN_MINUTES,
    config.LESSON_DURATION_IN_MINUTES,
  );

  const subjectsPerMonth = sort(getSubjectsPerMonth(subjectsWithData));

  const daysPerMonth = getDaysPerMonth(config.EDUCATION_DAYS_PER_MONTH);

  const result = genSchedule(daysPerMonth, subjectsPerMonth, config.LESSONS_PER_DAY);

  return result;
};
