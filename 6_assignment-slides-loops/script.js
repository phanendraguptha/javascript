for(var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(i); 
  }
}

var dollar = '$';
for(var i=1; i <= 6; i++) {
  console.log(dollar);
  dollar += '$';
}

for(var i = 1; i <= 6; i++) {
  console.log('$'.repeat(i));
}