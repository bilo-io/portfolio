export const countWords = (dataString) => {
    let wordCount = {}
    let words = dataString.split(' ').map((word) => { return removeSpecialChars(word).toLowerCase() });
    words.forEach((word) => {
        if (wordCount[word.toLowerCase()]) {
            wordCount[word.toLowerCase()]++;
        } else {
            wordCount[word.toLowerCase()] = 1;
        }
    })
    wordCount = removeFromObj(wordCount, ['a','and','for', 'into','is', 'your',  'the', 'to', 'then', 'it', 'i', 'me', 'you', 'this'])
    return wordCount;
}

export const combineWords = (oldData, newData) => {
    let result = oldData;
    for (var key in newData) {
        if (result[key]) {
            result[key] += newData[key]
        } else {
            result[key] = newData[key]
        }
    }
    return result;
}

export const generateWordCloud = (data) => {
    let histogram
    data.forEach((entry) => {
        if (!histogram) {
            histogram = countWords(entry)
        } else {
            histogram = combineWords(histogram, countWords(entry))
        }
    })
    console.log(histogram)
    return histogram;
}

export const removeSpecialChars = (word) => {
    return word.replace(/[^a-zA-Z ]/g, "");
}

export const removeFromObj = (obj, keys) => {
    keys.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
            delete obj[key];
        }
    })
    return obj
}
