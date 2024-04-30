const { register } = require('../controller/auth.controller');

const router = require('express').Router();

router.get('/check', (req, res) => {

    return res.status(200).json({ statusCode: 200, message: 'server islive' })

})

router.post('/register', register)
// router.post('/login')

// router.get('/getUserDetails')

module.exports = router;