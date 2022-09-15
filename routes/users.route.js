const {Router} = require('express')
const router = Router()
const { usersController } = require('../controllers/users.controller')


router.get('/user', usersController.getAllUser)
router.post('/user', usersController.createUser)
router.patch('/user', usersController.changeUser)
router.delete('/user/:id', usersController.deleteUser)
router.get('/admin/user', usersController.getAllUser)
router.post('/admin/user', usersController.createUser)
router.patch('/admin/user', usersController.changeUser)
router.delete('/admin/:_adminId/user/:_userId/book/:_bookId', usersController.deleteUser)


module.exports = router
