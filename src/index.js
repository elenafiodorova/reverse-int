module.exports = function reverse (n) {
    let minus=0;
    if (n<0) {
        minus = 1;
        n=n*(-1);
    }
    let str=String(n);
    let a=str.split('').reverse().join('');
    let number=+a;
    //if (minus=0) {return number}
      //  else {return number*(-1)}
      return number;
}
