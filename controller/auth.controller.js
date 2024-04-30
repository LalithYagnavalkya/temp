// const {} = require('zod')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, mobile } = req.body;

        const userObj = {
            firstName,
            lastName,
            email,
        }

        const encrptyedPassword = await bcrypt.hash(password, 10);
        userObj.password = encrptyedPassword;
        if (mobile){
            userObj.mobile = mobile;
        }

        const user = await User.create(userObj)
        return res.status(200).json({user})


    } catch (error) {
        if (error.code === 11000){
            return res.status(500).json({message: 'user already exists'})
        }
        // console.log(error)
        // error
    }
}