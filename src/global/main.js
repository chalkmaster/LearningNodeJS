console.log(__filename);

console.log(__dirname);

var t = setTimeout(function(){
    console.log('hello')
}, 2000);

clearTimeout(t);

var t = setInterval(function(){
    console.log('hello')
}, 800);