function isEven(x){
  if(x%2 === 0){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);

console.log(for factorial);

function factorial(n){
  if(n === 0){
    return 1;
  }
  else{
    return n*factorial(n-1);
  }
  
}
factorial(5);
factorial(2);
factorial(10);
factorial(0);

console.log(kabeb to snake case);
function kebabToSnake(x){
  t=x.replace("-","_");
  return t;
}
kebabToSnake("hello-world");
