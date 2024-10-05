const palindromes = function (word) {

    const letters = 'abcdefghijklmnpqrstuvwxyz0123456789';
    let splitWord = word.toLowerCase().split('');
    let filterWord = splitWord.filter((char) => letters.includes(char));
    let joinWord = filterWord.join('');

    let newSplit = joinWord.split('');
    let reverseNew = newSplit.reverse();
    let newWord = reverseNew.join('');

    return joinWord === newWord;
};

// Do not edit below this line
module.exports = palindromes;
