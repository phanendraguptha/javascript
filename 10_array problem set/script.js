//solution for reversing an array
function printReverse(a){
  var b=[];
  var k=0;
  for(var i=(a.length-1) ; i>=0; i--){
    b[k]=a[i];
    k++;
  }
  for(var p=0; p<b.length ; p++){
    console.log(b[p]);
  }
}
printReverse([1,2,3,4]);//function call


console.log("********************");
console.log("solution for \"is uniform\"");
console.log("********************");

//solution for checking whether all the elements in the array is uniform(equal)

function isUniform(a){
  var i=0;
  var j=1;
  var flag=0;
  while(i<a.length){
    if(a[i]===a[j]){
      flag=1;
    }
    i++;
    j++;
  }
  if(flag===1){
    console.log("true");
  }
  else{
    console.log("false");
  }
}
isUniform([1,2,3,4]);
isUniform([1,1,1,1]);

console.log("********************");
console.log("solution for \"sumArray()\"");
console.log("********************");

//solution for sum of all the elements in an array

function sumArray(a){
  var sum=0;
  for(var i=0; i<a.length; i++){
    sum=sum+a[i];
  }
  console.log(sum);
}
sumArray([1,2,3]);