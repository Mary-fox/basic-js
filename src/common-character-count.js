const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
//throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  const num = s2.split("");
  for(str of s1){
    let index = num.findIndex(s => s === str);
    if(index >= 0){
      count++;
      num.splice(index, 1);
      //  удаляем символ из массива символов второй входной строки,
      // чтобы он не учитывался при следующем совпадении:
    }
  }
  return count;

}

module.exports = {
  getCommonCharacterCount
};
