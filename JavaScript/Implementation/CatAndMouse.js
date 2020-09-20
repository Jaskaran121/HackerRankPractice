const catAndMouse = (x,y,z) => {
    let c1 = Math.abs(x-z);
    let c2 = Math.abs(y-z);
    if(c1 === c2)
        return "Mouse C";
    if(c1>c2)
        return "Cat B";
    return "Cat A";
}

// Ouput Cat B
catAndMouse(1,2,3);
