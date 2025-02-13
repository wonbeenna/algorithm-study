function wordChainGame(n, words) {
    // 사람수 n
    // 순서대로 이야기한 단어 배열 words
    // 다른사람이 같은단어를 말하거나, 끝말잇기가 이어지지 않은경우 탈락
    let 사람번호 = 0;
    let 차례 = 0;
    let firstWords = [words[0]];

    for(let i = 1; i < words.length; i++) {
        사람번호 = (i % n) + 1
        차례 = Math.floor((i / n) + 1)

        let prevWord = words[i - 1]; // 이전 단어
        let currentWord = words[i]; // 현재 단어

        if(firstWords.includes(words[i]) || prevWord[prevWord.length - 1] !== currentWord[0]) {
            return [사람번호, 차례]
        } else {
            firstWords.push(words[i])
        }
    }

    return [0, 0];
}

console.log(wordChainGame(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) // [3, 3]
console.log(wordChainGame(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])) // [0, 0]
console.log(wordChainGame(2, ["hello", "one", "even", "never", "now", "world", "draw"])) // [1, 3]
console.log(wordChainGame(2, ["hello", "one", "even", "never", "now", "world", "draw", "world"])) // [2, 4]
