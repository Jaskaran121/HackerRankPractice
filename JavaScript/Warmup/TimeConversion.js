const timeConversion = (s) => {
    const timeArr = s.split(":");
    const timePeriod = timeArr[2].substring(2,4);
    const hours = parseInt(timeArr[0],10);
    if(timePeriod === "AM"){ 
        if(hours === 12){
            timeArr[0] = "00";
        }
        return timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0,2);
    } else {
        if(hours !== 12)
            timeArr[0] = hours + 12 + "";
        return  timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0,               2);
    }
}
// Output 19:05:45
timeConversion("07:05:45PM");