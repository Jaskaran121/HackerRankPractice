const countingValleys = (steps,path) => {
    const pathArray = path.split("");
    let pathDirection = 0;
    let totalValleys = 0;
    let startedWith = "";
    pathArray.forEach((p,index) => {
        if(pathDirection === 0){
            startedWith = p;
        }
        if(p === "D")
            pathDirection-=1;
        if(p === "U")
            pathDirection+=1;
        if(index!==0 && pathDirection === 0 && startedWith === "D"){
            totalValleys++;
        }
    });
    return totalValleys;
}

// Output 1
countingValleys(8,"UDDDUDUU");