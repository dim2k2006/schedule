const getSubjects = (subjects, educationTime, lessonDuration) => subjects
  .map((subject) => ({
    ...subject,
    lessonsPerMonth: Math.round(((educationTime * subject.percentage) / 100) / lessonDuration),
  }))
  .filter((subject) => subject.lessonsPerMonth > 0);

export default getSubjects;
