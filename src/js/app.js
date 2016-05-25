"use strict";

var dropbox = require('node-dropbox');

if (window.location.href.indexOf("code=") === -1) {
  dropbox.Authenticate('qbryowo5frs09ht', '6vxj9idugg8qcg0', 'http://localhost:4000/home.html', function(err, url){
    window.location = url;
  });
} else {
  dropbox.AccessToken('qbryowo5frs09ht', '6vxj9idugg8qcg0', '-mBgh0aiy58AAAAAAACgiambSGhgDxV6D6KCVq5xNH0zI6IGYk9fQX5A_PHiHe8p', 'http://localhost:4000/home.html', function(err, body) {
  	var access_token = body.access_token;
    var api = dropbox.api(access_token);
    api.account(function(err, res, body) {
    	console.log(body);
    });
  });
}
