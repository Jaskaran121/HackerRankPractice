const timeInWords = (h,m) => {
    const word = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', '', 'sixteen', 'seventeen','eighteen', 'nineteen','twenty'];
    switch(m){
        case 0:
            return `${word[h]} o' clock`;
        case 15:
            return `quarter past ${word[h]}`;
        case 30:
            return `half past ${word[h]}`;
        case 45:
            return `quarter to ${word[h+1]}`;
    }
    const minutes = m<30 ? m : 60-m;
    const pluralM = minutes === 1 ? "minute" : "minutes";
    if(minutes <= 20)
        return m<30 ? `${word[minutes]} ${pluralM} past ${word[h]}` : `${word[minutes]} ${pluralM} to ${word[h+1]}`;
    return m<30 ? `twenty ${word[minutes-20]} minutes past ${word[h]}` : `twenty ${word[minutes-20]} minutes to ${word[h+1]}`;
}

// thirteen minutes to six
timeInWords(5,47);