import uuidv4 from 'uuid/v4';

const getSubjectsPerMonth = (subjects) => subjects
  .sort((a, b) => (a.percentage > b.percentage ? -1 : 1))
  .reduce((accumulator, subject) => {
    const lessonsPerMonth = [...new Array(subject.lessonsPerMonth)]
      .map(() => ({ ...subject }));

    return [...accumulator, lessonsPerMonth];
  }, [])
  .map((lessons) => lessons.map((lesson) => ({ ...lesson, id: uuidv4() })));

export default getSubjectsPerMonth;
