dropbox.authenticate( { client_id: 'qbryowo5frs09ht', redirect_uri: 'http://localhost:7000/' }, function(){
  dropbox('files/list_folder', {path: ''}, function(result) {

    var stream = document.querySelector(".stream");
    var results = result.entries;
    var resultsLength = results.length;

    for (var i = 0; i < resultsLength; i++) {
      var result = results[i];

      resultPreview = document.createElement('img');
      resultPreview.classList.add('preview');
      resultPreview.setAttribute("src", result.path_lower);

      stream.appendChild(resultPreview);
    }

  });
});
