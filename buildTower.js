/*
Build a pyramid-shaped tower, as an array/list of strings,
given a positive integer number of floors. A tower block is represented
with "*" character.
*/
function towerBuilder(nFloors) {
  let symbol = '';
  let counter = 1;
  let floorCounter = [1];
  let floorSymbols = [];
  let floorSpacing = [];
  let spacing = '';
  let result = [];
  let floorResult = [];

  for (let i = 1; i < nFloors; i++) {
    counter = counter + 2;
    floorCounter.push(counter);
  }

  for (let i = 0; i < floorCounter.length; i++) {
    symbol = '*'.repeat(floorCounter[i]);
    floorSymbols.push(symbol);
  }

  for (let i = nFloors - 1; i >= 1; i--) {
    spacing = spacing + ' ';
    floorSpacing.push(spacing);
  }

  floorSpacing.reverse();

  for (let i = 0; i < floorSymbols.length; i++) {
    if (floorSpacing[i]) {
      result = `${floorSpacing[i]}${floorSymbols[i]}${floorSpacing[i]}`;
      floorResult.push(result);
    } else {
      result = `${floorSymbols[i]}`;
      floorResult.push(result);
    }
  }

  return floorResult;
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