const migratoryBirds = (arr) => {
    const result = {};
    let maxBird = "";
    arr.forEach((item) => {
        if(!result[item]){
            result[item] = 1;
        }else
            result[item]+=1;
        if(!result[maxBird]){
            maxBird = item;
        } else if (result[maxBird] < result[item])
            maxBird = item;
          else if(result[maxBird] === result[item]){
              if(item < maxBird)
                maxBird = item;
          }  
    });
    return maxBird;
}

// Output 4
migratoryBirds([1,4,4,4,5,3]);
