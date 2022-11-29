/**
 * @description Handle function combine value to try about Union Types
 * @param {Number | String} firstParameter 
 * @param {Number | String} secondParameter 
 * @returns 
 */
const combineValue = (firstParameter: number | string, secondParameter: number | string) => { // --> This paramters can be number or string, and it usually called Union Types
  if (typeof firstParameter === 'number' && typeof secondParameter === 'number') {
    return firstParameter + secondParameter;
  } else {
    return firstParameter+'' + secondParameter+'';
  }
}

console.log(combineValue(1, 2));
console.log(combineValue('Rafi', 'Khoirulloh'));