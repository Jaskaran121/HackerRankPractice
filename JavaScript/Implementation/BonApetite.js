const bonAppetit = (bill, k, b) => {
    let sum = 0;
    bill.forEach((price,index) => {
        if(index !== k)
            sum+=price;
    });
    if(sum/2 == b)
        console.log("Bon Appetit");
    else
        console.log(b-sum/2);
}

// Output 5
bonAppetit([3,10,2,9],1,12);