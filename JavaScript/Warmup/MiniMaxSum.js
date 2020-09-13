const miniMaxSum = (arr) => {
    arr.sort();
    let sum = 0;
    for(let index = 1;index<arr.length-1;index++){
        sum+=arr[index];
    }
    console.log(`${sum+arr[0]} ${sum+arr[arr.length-1]}`);
}

// Output 10 14
miniMaxSum([1,2,3,4,5]);