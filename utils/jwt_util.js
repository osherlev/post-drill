const jwt = require("jsonwebtoken");

const generateTokens = async (user) => {

    return jwt.sign({"_id": user._id}, process.env.TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION});
}

const updateCookies = (accessToken, refreshToken, res) => {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'dev',
        sameSite: 'Strict',
        maxAge: process.env.ACCESS_TOKEN_EXPIRATION_MILLISECONDS
    });

}

const clearCookies = (res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'dev',
        sameSite: 'Strict'
    });
}

module.exports = {generateTokens, updateCookies, clearCookies}