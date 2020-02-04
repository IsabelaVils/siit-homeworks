var x = 1;
while (x <= 20) {
 console.log(x);
 x++;
}



for (var i = 1; i < 20; i+=2) { 
  console.log(i);
 }



function sum(num) {
   return num[0] + num[1] + num[2]
}
console.log(sum([10, 5, 3]));
 

var arr= [ 40, 50 , 3, 10];
var max= arr[0];

for (var i= 0; i< arr.length; i++) {
 if (arr[i] >= max) {
     max = arr[i];
  }
}
console.log(max);




var arr= [7, 5, 2, 5, 7, 2 ,7];
var count= 0;
for (var i= 0; i< arr.length; i++) {
  if (arr[i] === arr[0]) {
    count++;
  }
}
console.log(count);




