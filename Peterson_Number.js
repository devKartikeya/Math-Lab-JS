/*WAP to check whether a number is Peterson or Not*/

function checkPeterson(n){

  let sum = 0;
  let temp = n;

  while(n > 0){
    let d = n % 10;
    sum = sum + factorial(d);
    n = Math.floor(n/10);
  }

  if (sum == temp){
    return "Peterson";
  }

  return "Not Peterson";
}

function factorial(d){
  let facti = 1;

  for (let i = 1; i <= d; i++){
    facti = facti * i;
  }

  return facti;
}

console.log(checkPeterson(145));
