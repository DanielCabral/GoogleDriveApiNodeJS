const fs = require("fs");
const {google} = require('googleapis');
 
function imageUpload(fileName, filePath, callback){
    require("./gdrive-auth")((auth) => {
        const fileMetadata = {
            name: fileName
        };
 
        const media = {
            mimeType: "image/jpeg",
            body: fs.createReadStream(filePath)
        }
        
        const drive = google.drive({version: 'v3', auth});
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
          }).then(function(response) {
            switch(response.status){
              case 200:
                var file = response.result;
                console.log('Created Folder Id: ', response.data.id);
                break;
              default:
                console.log('Error creating the folder, '+response);
                break;
              }
          });;
    });
}
 
module.exports = { imageUpload };