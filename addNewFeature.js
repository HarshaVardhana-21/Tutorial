Files are raw.

function recfab(n){
  if( n<2 ){
      return n;
  }
      return recfab(n-1) + recfab(n-2)
}
console.log(recfab(7));

function factorial(n){
  var fac = 1;
  for(i=1; i<=n; i++){
      fac = fac * i
  }
  return fac
}
console.log(factorial(6));