const gradingStudents = (grades) => {
    return grades.map((grade) => {
        const nextMultiple = (Math.floor(grade/5) + 1)*5;
        if((nextMultiple - grade) < 3 && nextMultiple >=40){
            return nextMultiple;
        }
        return grade;
    });
}

// Output 75,67,40,33
gradingStudents([73,67,38,33]);