var client = new Dropbox.Client({ key: "qbryowo5frs09ht" });
var authBtn = document.querySelector("#auth-signin");

client.authenticate({interactive: false}, function(error, client) {
  if (client.isAuthenticated()) {

    client.getAccountInfo(function(error, accountInfo) {
      if (error) {
        return showError(error);  // Something went wrong.
      }

      // console.log("Hello, " + accountInfo.name + "!");
      client.readdir("/", function(error, thumbnails) {
        console.log(thumbnails)
        var newDiv = document.createElement("div");
        newDiv.innerHTML = thumbnails;

        var currentDiv = document.getElementById("#auth-signin");
        document.body.insertBefore(newDiv, currentDiv);
      });
    });

  } else {

    // show and set up the "Sign into Dropbox" button
    authBtn.setAttribute("class", "visible");
    authBtn.addEventListener("click", function() {

    });

  }
});
