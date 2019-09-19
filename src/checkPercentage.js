const limit = 100;

const checkPercentage = (subjects) => {
    const subjectsPercentageSum = subjects
        .reduce((accumulator, subject) => accumulator + subject.percentage, 0);

    if (subjectsPercentageSum === limit) return;

    throw new Error(`Subjects percentage sum can not be greater then ${limit}`);
};

export default checkPercentage;