import uuidv4 from 'uuid/v4';
import head from 'lodash/head';
import tail from 'lodash/tail';
import reverse from 'lodash/reverse';
import subjects from './subjects';
import checkPercentage from './checkPercentage';
import genHtml from './genHtml.js';

import getSubjects from './utils/getSubjects';

checkPercentage(subjects);

const educationDaysPerMonth = 12;
const educationTimePerMonthInHours = 48;
const EDUCATION_TIME_PER_MONTH_IN_MINUTES = educationTimePerMonthInHours * 60;
const LESSON_DURATION_IN_MINUTES = 60;
const lessonsPerDay = 4;

const getSubjectsPerMonth = (subjects) => {
    const subjectsPerMonth = subjects
        .sort((a, b) => a.percentage > b.percentage ? -1 : 1)
        .reduce((accumulator, subject) => {
            const lessonsPerMonth = [...new Array(subject.lessonsPerMonth)]
                .map(() => ({
                    id: subject.id,
                    percentage: subject.percentage,
                    title: subject.title,
                    type: subject.type
                }));

            return [...accumulator, lessonsPerMonth];
        }, [])
        .map((subjects) => subjects.map((subject) => ({...subject, id: uuidv4()})));

    return subjectsPerMonth;
};

const getDaysPerMonth = (days) => [...new Array(days)].map((d, id) => ({id: id + 1, subjects: []}));

const genSchedulePerSubject = (days, subjects) => {
    const daysLength = days.length;

    const iter = (days, currentDayId, subjects) => {
        if (!subjects.length) return days;

        if (days.every((d) => d.subjects.length === lessonsPerDay)) return days;

        const newId = (currentDayId === daysLength - 1) ? 0 : currentDayId + 1;

        const day = days[currentDayId];

        if (day.subjects.length === lessonsPerDay) return iter(days, newId, subjects);

        const subject = head(subjects);

        const newDays = days.map((d) => {
            if (d.id !== day.id) return d;

            return {
                ...d,
                subjects: [...d.subjects, subject]
            };
        });

        return iter(newDays, newId, tail(subjects));
    };

    return iter(days, 0, subjects);
};

const genSchedule = (days, subjects) => {
    if (!subjects.length) return days;

    const newDays = genSchedulePerSubject(days, head(subjects));

    return genSchedule(reverse(newDays), tail(subjects));
};

const subjectsWithData = getSubjects(subjects, EDUCATION_TIME_PER_MONTH_IN_MINUTES, LESSON_DURATION_IN_MINUTES);
const subjectsPerMonth = getSubjectsPerMonth(subjectsWithData);
const daysPerMonth = getDaysPerMonth(educationDaysPerMonth);
const schedule = genSchedule(daysPerMonth, subjectsPerMonth);

const html = genHtml(schedule);

document.body.innerHTML = html;