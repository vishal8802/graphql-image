const cloudinary = require("cloudinary").v2;
const { cloud_name, api_key, api_secret } = require("./key");
const url = `https://dummyimage.com/300/09f/fff.png`;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret
});

const resolver = {
  Query: {
    hello: () => "hello world"
  },
  Mutation: {
    uploadFiletoServer: async () => {
      let result;
      await cloudinary.uploader.upload(url, (err, res) => {
        if (err) {
          result = `Image not uploaded`;
          return false;
        }
        result = `Image uploaded successfully`;
        console.log(res);
        return true;
      });
      return result;
    }
  }
};

module.exports = resolver;
