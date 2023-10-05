/*
  You are given an array (which will have a length of at least 3,
  but could be very large) containing integers. The array is either 
  entirely comprised of odd integers or entirely 
  comprised of even integers except for a single integer N.
  Write a method that takes the array as an argument and returns
  this "outlier" N.
*/
function findOutlier(integers){
  const event=[];
   const odd=[];
   integers.forEach((items)=>{
     if(items%2===0) event.push(items);
     if(items%2!==0) odd.push(items);
   })
   return event.length<=odd.length? event[0]:odd[0]
 }
 findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) //-->  11 (the only odd number)

 findOutlier([160, 3, 1719, 19, 11, 13, -21])// --> 160 (the only even number)

