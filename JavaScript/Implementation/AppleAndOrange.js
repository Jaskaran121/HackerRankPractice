const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let result = 0;
    apples.forEach((apple) => {
        const finalValue = apple + a;
        if(s <= finalValue && finalValue <= t)
            result++;
    });
    console.log(result);
    result = 0;
    oranges.forEach((orange) => {
        const finalValue = orange + b;
        if(s <= finalValue && finalValue <= t)
            result++;
    });
    console.log(result);
}

// Output 1 1
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);