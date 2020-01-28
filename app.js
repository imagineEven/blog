const express = require('express');
const path = require('path');
const port = process.env.PORT || 8116;
const app = express();

//加载指定目录静态资源
app.use(express.static(__dirname + '/build'))

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port, function() {
  console.log("server started on port " + port)
})