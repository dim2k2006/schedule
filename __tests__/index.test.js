import subjects from './__fixtures__/subjects';
import expected from './__fixtures__/expected';
import genSchedule from '../src';

describe('genSchedule', () => {
  test('Should return correct schedule.', () => {
    const actual = genSchedule(subjects)
      .map((day) => ({
        ...day,
        subjects: day.subjects.map((s) => ({ ...s, id: '' })),
      }));

    const newExpected = expected
      .map((day) => ({
        ...day,
        subjects: day.subjects.map((s) => ({ ...s, id: '' })),
      }));

    expect(actual).toEqual(newExpected);
  });

  test('Should throw error if subjects percentage is wrong.', () => {
    function crash() {
      genSchedule([
        {
          title: 'Some subject 1',
          percentage: 90,
        },
        {
          title: 'Some subject 2',
          percentage: 20,
        },
      ]);
    }

    expect(crash).toThrow();
  });
});
