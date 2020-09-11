const diagonalDifference = (arr) => {
    const diagnolSum = [0,0];
    arr.forEach((row,index) => {
        diagnolSum[0]+= row[index];
        diagnolSum[1]+= row[row.length-index-1];
    });
    return Math.abs(diagnolSum[0]-diagnolSum[1]);
}

// Output: 15
diagonalDifference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]);