const bestSumRecursive = (target, numbers, memo = {}) => {

    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;
    let bestSumArray = null;
    let minArrayLength = null;
    let index = 0;

    for (let o of numbers) {
        let result = bestSumRecursive(target - o, numbers, memo);
        if (Array.isArray(result)) {
            result.push(o);
            if (minArrayLength === null || result.length < minArrayLength) {
                minArrayLength = result.length;
                bestSumArray = result;
            }
        }
        index += 1;
    }

    memo[target] = bestSumArray;

    return bestSumArray;
};

const bestSumTabulated = (target, numbers) => {
    const bestSumArray = Array(target + 1).fill(null);
    bestSumArray[0] = [[]];
    console.log(bestSumArray);

    let i = 0;
    while (i <= target) {
        let currentArray = bestSumArray[i];
        if (currentArray !== null) {
            for (let o of numbers) {
                const nextIndex = o + i;
                if (nextIndex <= target) {
                    const nextArray = bestSumArray[nextIndex];
                    const cArray = currentArray.map((v,i)=>[...v,o]);
                    if (nextArray !== null) {
                        bestSumArray[nextIndex] = [...nextArray, ...cArray];
                    } else {
                        bestSumArray[nextIndex] = [...cArray];
                    }
                }
            }
        }
        i++;
    }
    console.log(bestSumArray);
    return bestSumArray;

}

bestSumTabulated(5, [2,3,1]);