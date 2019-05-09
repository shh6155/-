//window.addEventListener('load', onclick, false);
var fs = require('fs');
var data = [fs.readFileSync('text.txt', 'utf8')];
// wait for the result, then use it
console.log(data[0]);

//var name1 =document.getElementById('clickname');

var onclick = document.getElementById('button');

 window.onload = function(){4
onclick.addEventListener('click',function(){
    clickname.innerHTML=data;
    
});
};
