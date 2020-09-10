const compareTriplets = (a,b) => {
    const result = [0,0];
    a.forEach((item,index) => {
        if(item > b[index])
            result[0] = ++result[0];
        if(item < b[index])
            result[1] = ++result[1];
    });
    return result;
}

// output 1 1
compareTriplets([5,6,7],[3,6,10]);