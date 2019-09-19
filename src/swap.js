const swap = (array, indexA, indexB) => {
    const newArray = [...array];

    const temp = newArray[indexA];

    newArray[indexA] = newArray[indexB];
    newArray[indexB] = temp;

    return newArray;
};

export default swap;