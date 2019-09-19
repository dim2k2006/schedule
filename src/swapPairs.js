import swap from './swap';

const swapPairs = (array) => {
    const length = array.length;
    const half = Math.floor(length / 2);

    console.log('half:', half);

    let result;

    for (let i = 0; i < half; i = i + 1) {
        result = swap(array, i, i + 2);
    }

    return result;
};

export default swapPairs;