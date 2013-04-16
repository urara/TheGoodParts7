//7-1-1
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '          ';
var i;

for(i = 0; i < names.length; i += 1){
  console.log(names[i] + ':' + blanks.substring(names[i].length), result[i]);
}


//7-1-2
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function(num){
  console.log(parse_number.test(num));
};
 
//7-2

var my_regexp = /"(?:\\.|[^\\\"])*"/g;

var hoge = my_regexp.exec("test");


//7-3


