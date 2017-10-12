export const countWords = (dataString) => {
    let wordCount = {}
    let words = dataString.split(' ');
    console.log({dataString})
    // for(let key in data) {
    words.forEach( (word) => {
        if (wordCount[word.toLowerCase()]) {
            wordCount[word.toLowerCase()]++;
        } else {
            wordCount[word.toLowerCase()] = 1;
        }
    })
    return wordCount;
}

export const combineWords = (oldData, newData) => {
    let result = oldData;
    for(var key in newData) {
        if(result[key]) {
            result[key] += newData[key]
        }else {
            result[key] = newData[key]
        }
    }
    return result;
}

export const generateWordCloud = (data) => {
    let histogram
    data.forEach( (entry) => {
        console.log({entry})
        if(!histogram) {
            histogram = countWords(entry)
        } else {
            histogram = combineWords(histogram, entry)
        }
    })
    return histogram;
}
