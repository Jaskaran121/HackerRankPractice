const birthdayCakeCandles = (candles) => {
    let max = 0;
    let count = 0;
    candles.forEach((candle) => {
        if(max === candle)
            count++;
        if(max < candle){
            max = candle;
            count = 1;
        }
    });
    return count;
}

//Output 2
birthdayCakeCandles([3,2,1,3]);