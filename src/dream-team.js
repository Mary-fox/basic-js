const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dremTeam = "";
  
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string'){
    let j = members[i].replace(/\s/g, '');
    dremTeam += j[0];
  } 
 }

 let newDremTeam = dremTeam.trim().toUpperCase().split("").sort().join('');

 if ( newDremTeam.length == 0 && typeof newDremTeam !== 'string' && newDremTeam == null) {
  return false;
  }
 return newDremTeam;
 }

module.exports = {
  createDreamTeam
};
