Files are raw.
function recfab(n){
    if( n<2 ){
        return n;
    }
        return recfab(n-1) + recfab(n-2)
}
console.log(recfab(7));
