Files are raw.

  function factorial(n){
    var fac = 1;
    for(i=1; i<=n; i++){
        fac = fac * i
    }
    return fac
}
console.log(factorial(6));
