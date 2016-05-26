dropbox.authenticate( { client_id: 'qbryowo5frs09ht' }, function(){
  dropbox('files/list_folder', {path: ''}, function(result) {
     console.log(result.entries);
     console.log(result.entries.path_lower);
  });

  // dropbox('files/get_preview', {path: ''}, function(path) {
  //    console.log(path);
  // });
});
