// const getSubjectsPerDay = (subjects) => { // неверно выбирает предметы когда их остается мало
//     const iter = (list, accumulator) => {
//         if (!list.length) return accumulator;
//
//         if (accumulator.length === lessonsPerDay) return accumulator;
//
//         const subject = list[random(0, list.length - 1)];
//
//         return iter(list.filter((item) => item.id !== subject.id), [...accumulator, subject]);
//     };
//
//     return iter(subjects, []);
// };

// const getRemainingSubject = (allSubjects, selectedSubjects) => allSubjects
//     .map((subject) => {
//         const {id} = subject;
//
//         if (!includes(selectedSubjects, id)) return subject;
//
//         return {
//             ...subject,
//             lessonsPerMonth: subject.lessonsPerMonth - 1
//         }
//     })
//     .filter((subject) => subject.lessonsPerMonth > 0);

// const genSchedule = (days, subjects) => {
//     if (!days.length) return [];
//
//     const day = head(days);
//
//     const subjectsPerDay = getSubjectsPerDay(subjects);
//
//     const dayWithSubjects = {
//         ...day,
//         subjects: subjectsPerDay
//     };
//
//     const newSubjects = getRemainingSubject(subjects, subjectsPerDay.map((s) => s.id));
//
//     console.group(`Day ${day.id}`);
//     console.log('subjects:', subjects);
//     console.log('subjectsPerDay:', subjectsPerDay);
//     console.log('newSubjects:', newSubjects);
//     console.groupEnd();
//
//     return [dayWithSubjects, ...genSchedule(tail(days), newSubjects)];
// };


