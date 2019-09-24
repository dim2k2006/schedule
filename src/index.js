import subjects from './subjects';
import checkPercentage from './checkPercentage';
import genHtml from './genHtml.js';

import getSubjects from './utils/getSubjects';
import getSubjectsPerMonth from './utils/getSubjectsPerMonth';
import getDaysPerMonth from './utils/getDaysPerMonth';
import genSchedule from './utils/genSchedule';

checkPercentage(subjects);

const EDUCATION_DAYS_PER_MONTH = 12;
const educationTimePerMonthInHours = 48;
const EDUCATION_TIME_PER_MONTH_IN_MINUTES = educationTimePerMonthInHours * 60;
const LESSON_DURATION_IN_MINUTES = 60;
const LESSONS_PER_DAY = 4;

const subjectsWithData = getSubjects(subjects, EDUCATION_TIME_PER_MONTH_IN_MINUTES, LESSON_DURATION_IN_MINUTES);
const subjectsPerMonth = getSubjectsPerMonth(subjectsWithData);
const daysPerMonth = getDaysPerMonth(EDUCATION_DAYS_PER_MONTH);
const schedule = genSchedule(daysPerMonth, subjectsPerMonth, LESSONS_PER_DAY);

const html = genHtml(schedule);

document.body.innerHTML = html;