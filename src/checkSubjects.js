const checkSubjects = (limit) => (subjects) => {
    const totalLessons = subjects
        .reduce((accumulator, subject) => accumulator + subject.lessonsPerMonth, 0);

    if (totalLessons >= limit) return;

    throw new Error(`Subjects count per month should be equal or greater then ${limit}. Got ${totalLessons}`);
};

export default checkSubjects;