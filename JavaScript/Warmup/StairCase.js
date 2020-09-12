const staircase = (n) => {
    for(let index = 1;index<=n;index++){
        let blankSpaces = "";
        let hashTags = "";
        for(let b = 1;b<=n-index;b++){
            blankSpaces+= " "; 
        }
        for(let h = 1;h<=index;h++){
            hashTags+="#";
        }
        console.log(blankSpaces + hashTags);
    }
}
// Output
//     #
//    ##
//   ###
//  ####
// #####
//######
staircase(6);