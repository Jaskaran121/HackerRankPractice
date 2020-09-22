const designerPdfViewer = (h,word) => {
    let maxH = 0;
    for(let index = 0;index<word.length;index++){
        const asciiCode = word.charCodeAt(index);
        if(h[asciiCode-97] > maxH)
            maxH = h[asciiCode-97];
    }
    return maxH * word.length;
}

// https://www.hackerrank.com/challenges/designer-pdf-viewer
