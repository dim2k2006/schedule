const sortEvenly = (data1, data2) => {
  const array1 = [...data1];
  const array2 = [...data2];

  const result = [];

  const finLength = array1.length + array2.length;
  const intervalLen = finLength / array2.length;

  let intervalNum = 0;

  for (let i = 0; i < finLength; i += 1) {
    if (i >= Math.round(intervalNum * intervalLen)) {
      result[i] = array2.shift();

      intervalNum += 1;
    } else {
      result[i] = array1.shift();
    }
  }

  return result;
};

export default sortEvenly;
