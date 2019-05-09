
var request = require('request'),
cheerio = require('cheerio');
var url = "http://www.naver.com";
var fs = require('fs');
var playloop= setInterval(function(){
request(url, function (err, res, html) {
    
    
    if (!err) {
        var $ = cheerio.load(html);
        var post = [];
        

      for(var i =1; i <21; i++ ){
        
        $(".ah_roll_area .ah_k").each(function(){
             
            var data = $(this);
            var data_txt =data.text();
           var data_split = data_txt.split(",");
           
            post.push([i]+"위  "+data_split);
           
            //main.innerHTML(post);
            //console.log(post);
            
          
           
         i++
        })
      
        
        fs.writeFileSync('text.html', post, 'utf8');
        
           var date = new Date()
           date =`${date.getHours()}:${date.getMinutes()}`;
        console.log(post,`#####크롤링 저장 완료${[date]}######`);
        
      
        if(date=="4:33"){
            clearInterval(playloop);
        }
            };
        }
        
    }
      

      
    
)
},60*1000);


