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
        var array = thumbnailUrl.toString();
        console.log(array);
        // var gridImage = document.createElement("div");

        function handleImages(thumbnailUrl) {
          for (var i = 0; i < thumbnailUrl.length; i++) {
            var url = thumbnailUrl[i];

            var gridImage = document.createElement("img");
            img.classList.add("obj");
            img.url = thumbnailUrl;
            preview.appendChild(img);

            document.body.insertBefore(gridImage, authBtn);
          }
        }
        // document.body.insertBefore(gridImage, authBtn);
      });
    });

  } else {
    authBtn.setAttribute("class", "visible");
    authBtn.addEventListener("click", function() {

    });
  }
});
