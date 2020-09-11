const plusMinus = (arr) => {
    const result = [0,0,0];
    arr.forEach((num) => {
        if(num<0)
            result[1] = result[1] + 1;
        else if(num === 0)
            result[2] = result[2] + 1;
        else
            result[0] = result[0] + 1; 
    });
    const length = arr.length;
    result.forEach((r) => console.log((r/length).toFixed(6)));
}

// Output 0.500000
// 0.333333
// 0.166667
plusMinus([-4, 3, -9, 0, 4, 1]);