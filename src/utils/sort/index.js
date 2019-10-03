import sortEvenly from '../sortEvenly';

const sort = (subjects = []) => subjects
  .reduce((accumulator, subject) => sortEvenly(accumulator, subject), []);

export default sort;
