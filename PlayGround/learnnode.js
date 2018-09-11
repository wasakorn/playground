function prefix(pre){
    return function fileHandler(err, data){
        console.log('Say: ' + data.toString());
    };
}
var fileHandler = prefix('Say: ');

var fs = require('fs');
//fs.readFile('test.js',fileHandler);
var say = require('./say');
say.sayHello();
say.sayHi();