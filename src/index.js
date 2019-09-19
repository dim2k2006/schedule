import random from 'lodash/random';
import head from 'lodash/head';
import tail from 'lodash/tail';
import includes from 'lodash/includes';
import has from 'lodash/has';
import get from 'lodash/get';
import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';
import uuidv4 from 'uuid/v4';
import subjects from './subjects';
import checkPercentage from './checkPercentage';
import checkSubjects from './checkSubjects';
import checkSchedule from './checkSchedule';
import genHtml from './genHtml.js';

checkPercentage(subjects);

const educationDaysPerMonth = 12;
const educationTimePerMonthInHours = 48;
const educationTimePerMonthInMinutes = educationTimePerMonthInHours * 60;
const lessonDurationInMinutes = 60;
const lessonsPerDay = 4;

const getSubjects = (subjects) => subjects
    .map((subject) => ({
        ...subject,
        occupiedTimePerMonthInMinutes: educationTimePerMonthInMinutes * subject.percentage / 100
    }))
    .map((subject) => ({
        ...subject,
        lessonsPerMonth: Math.round(subject.occupiedTimePerMonthInMinutes / lessonDurationInMinutes)
    }))
    .filter((subject) => subject.lessonsPerMonth > 0);

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

const getDaysPerMonth = (days) => [...new Array(days)].map((d, id) => ({id: id + 1}));

const getSubjectsPerDay = (subjects, limit) => { // что делать если уроков меньше чем limit ???
    const processedSubjects = subjects.length < limit
        ? flattenDeep(subjects)
        : subjects;

    const subjectsPerDay = [...new Array(limit)]
        .map((item, id) => {
            const path = subjects.length < limit ? `[${id}]` : `[${id}][0]`;
            const subject = get(processedSubjects, path, null);

            return subject;
        });

    return compact(subjectsPerDay);
};

const getFilteredSubjects = (allSubjects, selectedSubjects) => {
    const result = allSubjects
        .map((subSubjects) => subSubjects.filter((subSubject) => !includes(selectedSubjects, subSubject.id)))
        .filter((subSubjects) => subSubjects.length !== 0);

    return result;
};

const genSchedule = (days, subjects) => {
    if (!days.length) return [];

    const day = head(days);

    const subjectsPerDay = getSubjectsPerDay(subjects, lessonsPerDay);

    const newSubjects = getFilteredSubjects(subjects, subjectsPerDay.map((s) => s.id));

    const dayWithSubjects = {...day, subjects: subjectsPerDay};

    return [dayWithSubjects, ...genSchedule(tail(days), newSubjects)];
};

const subjectsWithData = getSubjects(subjects);
const subjectsPerMonth = getSubjectsPerMonth(subjectsWithData);
const daysPerMonth = getDaysPerMonth(educationDaysPerMonth);

checkSubjects(educationDaysPerMonth * lessonsPerDay)(subjectsWithData);

const schedule = genSchedule(daysPerMonth, subjectsPerMonth);

console.log('schedule:', schedule);

checkSchedule(educationDaysPerMonth * lessonsPerDay)(schedule);

const html = genHtml(schedule);

document.body.innerHTML = html;