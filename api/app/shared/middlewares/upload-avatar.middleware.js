const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, './public/assets');
  },
  filename: function (request, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });
const uploadAvatarMiddleware = upload.single('avatar');

module.exports = uploadAvatarMiddleware;
