const getDaysPerMonth = (days) => [...new Array(days)]
  .map((d, id) => ({ id: id + 1, subjects: [] }));

export default getDaysPerMonth;
