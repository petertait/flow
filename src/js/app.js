"use strict";

var dbox = require('dbox');
var app  = dbox.app({ "app_key": "qbryowo5frs09ht", "app_secret": "6vxj9idugg8qcg0" })

app.requesttoken(function(status, request_token){
  console.log(request_token)
  url = 'https://www.dropbox.com/1/oauth/authorize?oauth_token=#{ request_token.oauth_token }'
  window.location = url;
})

app.accesstoken(request_token, function(status, access_token){
  console.log(access_token)
})

var client = app.client(access_token)
client.account(function(status, reply){
  console.log(reply)
})

// if (window.location.href.indexOf("code=") === -1) {
//
//     window.location = url;
//
// } else {
//   dropbox.AccessToken('qbryowo5frs09ht', '6vxj9idugg8qcg0', '-mBgh0aiy58AAAAAAACgiambSGhgDxV6D6KCVq5xNH0zI6IGYk9fQX5A_PHiHe8p', 'http://localhost:4000/home.html', function(err, body) {
//   	var access_token = body.access_token;
//     var api = dropbox.api(access_token);
//     api.account(function(err, res, body) {
//     	console.log(body);
//     });
//   });
// }
