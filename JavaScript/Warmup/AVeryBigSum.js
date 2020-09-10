const aVeryBigSum = (arr) => {
    let sum = 0;
    arr.forEach((item) => sum+=item);
    return sum;
}

// Output 5000000015
aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);