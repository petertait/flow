dropbox.authenticate( { client_id: 'qbryowo5frs09ht' }, function(){
  dropbox('files/list_folder', {path: ''}, function(result) {

    var stream = document.querySelector(".stream");
    var results = result.entries;
    var resultsLength = results.length;

    for (var i = 0; i < resultsLength; i++) {
      console.log(results[i]);

      resultPreview = document.createElement('img');
      resultPreview.classList.add('preview');
      // resultPreview.setAttribute("src", file/path_lower);

      stream.appendChild(resultPreview);
    }

    var list = function(obj) {
      for(var prop in obj) {
        console.log(prop);
      }
    };

    list(path_lower);

  });



  // dropbox('files/get_preview', {path: ''}, function(path) {
  //    console.log(path);
  // });
});
