const breakingRecords = (scores) => {
    const result = [0,0];
    let max = scores[0];
    let min = scores[0];
    for(let index = 1;index<scores.length;index++){
        if(scores[index] > max){
            max = scores[index];
            result[0]+=1;
        }
        if(scores[index]<min){
            min = scores[index];
            result[1]+=1;
        }
    }
    return result;
}
