const isJuLianLeapYear = (year) => year%4===0;

const isGregorianLeapYear = (year) => {
    if(year%100 === 0 && year%400 !==0)
        return false;
    return year%4 === 0;
}
const dayOfProgrammer = (year) => {
    let leapYearDate;
    if(year === 1918)
        return "26.09.1918";
    if(year<1918){
        leapYearDate = isJuLianLeapYear(year) ? 12 : 13;
    }else{
        leapYearDate = isGregorianLeapYear(year) ? 12 : 13;
    }
    return `${leapYearDate}.09.${year}`;
}

// Output 13.09.2017
dayOfProgrammer(2017);