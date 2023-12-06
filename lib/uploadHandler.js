import multer from "multer";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "uploads/profiles")
    },
    filename: function (req, file, cb) {


        cb(null, req.body.id + '.jpg')

    }

})

const productStorage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "uploads/products")
    },
    filename: function (req, file, cb) {


        cb(null, req.body.id + '.jpg')

    }

})

export const upload = multer({storage: storage});
export const uploadProduct = multer({storage: productStorage});

