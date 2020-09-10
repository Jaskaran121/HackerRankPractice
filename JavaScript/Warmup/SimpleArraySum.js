const simpleArraySum = (arr) => {
    let sum = 0;
    arr.forEach((item) => sum+=item);
    return sum;
}

// Outpur 31
simpleArraySum([1,2,3,4,10,11]);