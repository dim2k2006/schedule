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
});
