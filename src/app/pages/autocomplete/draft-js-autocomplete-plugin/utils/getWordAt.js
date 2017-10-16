const getWordAt = (string, position) => {
    const str = String(string);
    const pos = Number(position) >>> 0;

    const left = str.slice(0, pos + 1).search(/\S+$/);
    const right = str.slice(pos).search(/\s/);

    if(right < 0) {
        return {
            word: str.slice(left),
            begin: left,
            end: str.length,
        }
    }

    return {
        word: str.slice(left, right + pos),
        begin: left,
        end: right + pos
    }
}

export default getWordAt;