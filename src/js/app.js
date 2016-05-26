var Promise = require('es6-promise').Promise;

dropbox.authenticate( { client_id: 'qbryowo5frs09ht' }, function(){
  dropbox('files/list_folder', {path: '/some/path'}, function(result) {
     console.log(result.entries);
  });
});
