const gdrive = require("./gdrive");
const res=gdrive.imageUpload("imagem.jpg", "./imagem.jpg", (id) => {
    console.log(id);
});
console.log(res);