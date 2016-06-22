dropbox.authenticate( { client_id: 'qbryowo5frs09ht', redirect_uri: 'http://localhost:7000/' }, function(){
  dropbox('files/list_folder', {path: ''}, function(result) {

    var stream = document.querySelector(".stream");
    var results = result.entries;
    var resultsLength = results.length;

    for (var i = 0; i < resultsLength; i++) {
      var result = results[i];
      dropbox('files/get_thumbnail', {path: result.path_lower}, {
        // onComplete: function(result){ console.log(result); }

        onComplete: function(result, response, r ){
          console.log(result);console.log(response);console.log(r);
          var blob = new Blob(response.response, {type: ’application/octet-stream’});
          resultPreview = document.createElement('img');
          resultPreview.classList.add('preview');
          resultPreview.src = window.URL.createObjectURL(blob);

        }



      });

      // dropbox('files/get_thumbnail', {path: result.path_lower}, function(result) {
      //   resultPreview = document.createElement('img');
      //   resultPreview.classList.add('preview');
      //   resultPreview.setAttribute("src", result.path_lower);
      //   stream.appendChild(resultPreview);
      // });
    }
  });
});
