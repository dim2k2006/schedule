import getSubjects from '.';

describe('getSubjects', () => {
  test('Should return correct subjects.', () => {
    const subjects = [
      {
        id: '1',
        title: 'hexlet',
        percentage: 30,
        type: 'technical',
      },
      {
        id: '2',
        title: 'тех.лит',
        percentage: 20,
        type: 'technical',
      },
      {
        id: '3',
        title: 'худ.лит',
        percentage: 0,
        type: 'humanitarian',
      },
    ];
    const educationTime = 2880;
    const lessonDuration = 60;

    expect(getSubjects(subjects, educationTime, lessonDuration)).toEqual([
      {
        id: '1',
        title: 'hexlet',
        percentage: 30,
        type: 'technical',
        lessonsPerMonth: 14,
      },
      {
        id: '2',
        title: 'тех.лит',
        percentage: 20,
        type: 'technical',
        lessonsPerMonth: 10,
      },
    ]);
  });
});
