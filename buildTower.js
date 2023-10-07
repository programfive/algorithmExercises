/*
Build a pyramid-shaped tower, as an array/list of strings,
given a positive integer number of floors. A tower block is represented
with "*" character.
*/
function towerBuilder(nFloors) {
  const result = [];
  for (let i = 1; i <= nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i);
      const asterisk = '*'.repeat(i * 2 - 1);
      result.push(`${spaces}${asterisk}${spaces}`)
  }

  return result;
}
towerBuilder(3);
towerBuilder(6);
/*
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/