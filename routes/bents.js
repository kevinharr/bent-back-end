const router = require('express').Router()
const bentsCtrl = require('../controllers/bents.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, bentsCtrl.createBent)


module.exports = router