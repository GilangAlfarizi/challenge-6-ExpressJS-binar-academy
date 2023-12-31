const bcrypt = require('bcrypt')
const ImageKit = require('imagekit')

const cryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);

    return bcrypt.hash(password, salt)
}

const exclude = (model, keys) => {
    return Object.fromEntries(
        Object.entries(model).filter(([key]) => !keys.includes(key))
    );
}

module.exports = {
    cryptPassword,
    imagekit: new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
    }),
    exclude
}