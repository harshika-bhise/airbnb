if(process.env.NODE_ENV !== "production"){
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "wanderlust_DEV",
      allowerdFormats: ["png", "jpg", "jpeg"],
    },
});

module.exports = {
  cloudinary, 
  storage,
};
