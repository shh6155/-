
var request = require('request'),
cheerio = require('cheerio');
//var main = Document.getElementById("name");
var url = "http://www.naver.com";


var a =request(url, function (err, res, html) {
    
    
    if (!err) {
        var $ = cheerio.load(html);
        

        $(".ah_k").each(function(){
            var post =[];
            var data = $(this);

            
            
            post.push(data.text());
           
            //main.innerHTML(post);
            console.log(typeof post);
            console.log(post);
         
        })
       
        }

})



