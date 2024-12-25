const str = "hello world how are you doing"

// assesing o(1) - constant
console.log(str[0]);

// searching  0(n)
console.log(str.indexOf("g"));

// concatenation : o(n)
console.log(str + " new");

// split itemL o(n)
console.log(str.split(" "));
