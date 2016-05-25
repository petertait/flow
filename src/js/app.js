"use strict";

var client = new Dropbox.Client({
  key: "qbryowo5frs09ht",
  secret: "6vxj9idugg8qcg0"
});

client.authenticate(function(error, client) {
  console.log("Success");
});

client.readdir("/home.html", function(error, entries) {
  alert("Your Dropbox contains " + entries.join(", "));
});
