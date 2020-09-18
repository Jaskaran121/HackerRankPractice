const sockMerchant = (n,ar) => {
    const socks = {};
    ar.forEach((sock) => {
        if(!socks[sock]){
            socks[sock] = 1;
        } else
            socks[sock]+=1;
    });
    let count = 0;
    Object.values(socks).forEach((sock) => {
        count+=Math.floor(sock/2);
    });
    return count;
}

sockMerchant(9,[10,20,20,10,10,30,50,10,20]);