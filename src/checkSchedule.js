const checkSchedule = (limit) => (days) => {
    const totalLessons = days
        .reduce((accumulator, day) => accumulator + day.subjects.length, 0);

    if (totalLessons === limit) return;

    throw new Error(`Lessons count per month should be equal to ${limit}. Got ${totalLessons}`);
};

export default checkSchedule;