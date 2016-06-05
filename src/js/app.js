dropbox.authenticate( { client_id: 'qbryowo5frs09ht' }, function(){
  dropbox('files/list_folder', {path: ''}, function(result) {

    var stream = document.querySelector(".stream");
    var results = result.entries;
    var resultsLength = results.length;

    for (var i = 0; i < resultsLength; i++) {
      console.log(results[i]);

      resultPreview = document.createElement('img');
      resultPreview.classList.add('preview');
      resultPreview.setAttribute("src", result.path_lower);

      stream.appendChild(resultPreview);
    }

  });
});
