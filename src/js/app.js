"use strict";

var client = new Dropbox.Client({ key: "qbryowo5frs09ht" });

client.authenticate({interactive: false}, function(error, client) {
  if (client.isAuthenticated()) {

    client.getAccountInfo(function(error, accountInfo) {
      if (error) {
        console.log("error");
      }

      var userName = document.querySelector(".user");
      userName.innerHTML = accountInfo.name;

      client.readdir("/", function(error, thumbnailUrl) {
        for (var i = 0; i < 2; i++) {
          var streamImage = document.createElement("img");
          streamImage.classList.add("stream-image");
          streamImage.src = thumbnailUrl;

          var stream = document.querySelector(".stream");
          stream.appendChild(streamImage);
        }
      });
    });

    var authBtn = document.querySelector(".btn-signout");
    authBtn.setAttribute("class", "visible");
    authBtn.addEventListener("click", function() {
      client.signOut( function(error) {
        if (error) {
          console.log("error");
        }
      });
    });

  } else {
    var authBtn = document.querySelector(".btn-signin");
    authBtn.setAttribute("class", "visible");
    authBtn.addEventListener("click", function() {
      console("login");
    });
  }
});

// handleImages(thumbnailUrl);
// function handleImages(thumbnailUrl) {}
