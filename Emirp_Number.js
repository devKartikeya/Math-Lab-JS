/*WAP to check whether a number is Emirp or Not*/

function checkPrime(n){
  for (let i = 2; i < n; i++){
    if (n % i == 0){
      return false;
    }
  }
  return true;
}

function checkEmirp(n){

  if (!checkPrime(n)) return false;

  let reversed = String(n).split("").reverse().join("");
  reversed = Number(reversed);

  if (n !== reversed && checkPrime(reversed)){
    return true;
  }

  return false;
}

let n = 13;

if (checkEmirp(n)){
  console.log(`${n} is Emirp`);
} else {
  console.log(`${n} is Not Emirp`);
}
