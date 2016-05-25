var client = new Dropbox.Client({ key: "qbryowo5frs09ht" });
var authBtn = document.querySelector("#auth-signin");

client.authenticate({interactive: false}, function(error, client) {
  if (client.isAuthenticated()) {

    client.getAccountInfo(function(error, accountInfo) {
      if (error) {
        return showError(error);  // Something went wrong.
      }

      var userName = document.querySelector(".user");
      userName.innerHTML = accountInfo.name;

      client.readdir("/", function(error, thumbnailUrl) {
        console.log(thumbnailUrl)
        var gridImage = document.createElement("div");

        var dbImage = thumbnailUrl.length;

        for (var i = 0, dbImage = thumbnailUrl.length; i < dbImage; i++) {
          var url = thumbnailUrl[i];
          gridImage.innerHTML = url;
        }

        document.body.insertBefore(gridImage, authBtn);
      });
    });

  } else {
    authBtn.setAttribute("class", "visible");
    authBtn.addEventListener("click", function() {

    });
  }
});
