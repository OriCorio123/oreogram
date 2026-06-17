const ImageKit = require('@imagekit/nodejs');
const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
});
const fileUpload = async (buffer)=>{
    const response = await client.files.upload({
  file: buffer.toString('base64'),
  fileName: "Image1",
});
return response;
}
module.exports = fileUpload;