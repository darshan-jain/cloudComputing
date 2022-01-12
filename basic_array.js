var arr1 =[1,3,5,10,1,3,2,9];
for(var i = 0; i < arr1. length ; i++)
{console. log(arr1[i])}

console. log(" ")
var  numsSort = arr1.sort((a, b) => a - b);

var arr2 = [numsSort[0],numsSort[1],numsSort[2]];
for(var i = 0; i < arr2. length ; i++)
{console. log(arr2[i])}
console. log(" ")

arr1.splice(5,0,15);

for(var i = 0; i < arr1. length ; i++)
{console. log(arr1[i])}
