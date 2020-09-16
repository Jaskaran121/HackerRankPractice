const birthday = (s,d,m) => {
    let count = 0;
    let windowSum = 0;
    // Sliding window algorithm
    for(let i = 0;i<=s.length-m;i++){
        if(i === 0){
            for(let j=0;j<m;j++){
                windowSum+=s[j];
            }
        } else {
            // Subtracting first num of last window and adding last num of new window.
            windowSum-=s[i-1];
            windowSum+=s[i+m-1];
        }
        if(windowSum === d){
            count++;
        }
    }
    return count;
}
// Ouput 2
birthday([1,2,1,3,2],3,2);