/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }

    const validCharsRegex = /^[0-9a-zA-Z]+$/;
    if (!validCharsRegex.test(word)) {
        return false;
    }

    const vowelsRegex = /[aeiou]/i;
    if (!vowelsRegex.test(word)) {
        return false;
    }

    const consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/i;
    if (!consonantsRegex.test(word)) {
        return false;
    }

    return true;
};