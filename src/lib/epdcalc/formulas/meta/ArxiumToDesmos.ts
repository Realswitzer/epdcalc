// exports all of this stuff into lists that can be pasted in desmos with relatively little setup.

import { arxtable } from './Arxium';

let prestigeNumbers: string = '';
let arxiumPerPrestigeNumbers: string = '';
for (const key in arxtable) {
	prestigeNumbers += key + ',';
	arxiumPerPrestigeNumbers += arxtable[key] + ',';
}
prestigeNumbers = prestigeNumbers.slice(0, prestigeNumbers.length - 1);
arxiumPerPrestigeNumbers = arxiumPerPrestigeNumbers.slice(0, arxiumPerPrestigeNumbers.length - 1);

console.log(`p_{restiges}=[${prestigeNumbers}]`);
console.log(`a_{rxiumgain}=[${arxiumPerPrestigeNumbers}]`);
// ok now that you have this awful thing to look at, create a new table with two columns: prestiges and arxiumgain
// p_{restiges} , a_{rxiumgain}
// the LoBF is the quadratic regression, fairly low variance though the data points are all high prestiges and theres a massive gap in the middle so uhm.
