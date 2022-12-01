type ICombinable = number | string; // --> This is type alias. Type alias is a way to give a name to a type. It can be used to give a name to a union type, tuple type, or any other type that you need to reuse multiple times.

/**
 * @description Handle function combine value to try about Union Types
 * @param {Number | String} firstParameter 
 * @param {Number | String} secondParameter 
 * @returns 
 */
const combineValue = (firstParameter: ICombinable, secondParameter: ICombinable) => { // --> This paramters can be number or string, and it usually called Union Types
  if (typeof firstParameter === 'number' && typeof secondParameter === 'number') {
    return firstParameter + secondParameter;
  } else {
    return firstParameter+'' + secondParameter+'';
  }
}

console.log(combineValue(1, 2));
console.log(combineValue('Rafi', 'Khoirulloh'));