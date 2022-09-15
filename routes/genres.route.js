const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')
const router = Router()

router.get('/genre', genresController.getAllGenre)
router.post('/genre', genresController.createGenre)
router.patch('/genre', genresController.changeGenre)
router.delete('/genre/:id', genresController.deleteGenre)



module.exports = router