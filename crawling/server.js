

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    if(_url == '/'){
      _url = '/main.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
      
    }
   
  
 


response.writeHead(200);
fs.readFile("text.html", 'utf8',
function(err,text_data){
  var text_none = text_data.replace(/\,/g,'<br><br>');
  var template=`
  <!DOCTYPE html>

<html>
    <head>
            <meta charset="utf-8">
           
            
    </head>
    <style>
      html{
      background-color: cadetblue;
  }
  
     div{
      
      text-align: center;
      font-size: 15px;
      color: white;
  }
    </style>

    <script>
    
    
    function refresh_timer(){
      setTimeout(function(){
          location.reload();
        
      },60*1000);
      console.log("시간별 새로고침");
      var date= new Date();
          var result = document.getElementById("time");
          result.innerHTML=date +"기준";
    };
    </script>
    <body onload ="refresh_timer()">
            <div>${text_none}<br><br></div>
                <div id="time" ></div>
    </body>
</html>
  `;
  response.end(template);
  
})
});
//크롤링불러오기
app.listen(2000);
