const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null,'./uploads/')
    },
    filename: function (request, file, cb){
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (request,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    }
    else{
        cb({message:'Formato não suportado'},false)
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize:1024 * 1024},
    fileFilter:fileFilter 
}) 

module.exports = upload;