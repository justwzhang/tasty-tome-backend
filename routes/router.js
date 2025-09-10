const auth = require('../auth');
const express = require('express');

const Top5ListController = require('../controllers/top5list-controller');
const UserController = require('../controllers/user-controller');
const HealthController = require('../controllers/health-controller');
const RecipeController = require('../controllers/recipe-controller');
const router = express.Router()


// Recipe routes
router.post('/recipe', auth.verify, RecipeController.createRecipe);
router.put('/recipe/:id', auth.verify, RecipeController.updateRecipe);
router.get('/recipes', auth.verify, RecipeController.getRecipes);
router.delete('/recipe/:id', auth.verify, RecipeController.deleteRecipe);

// Top5List routes
router.post('/top5list', auth.verify, Top5ListController.createTop5List)
router.put('/top5list/:id', auth.verify, Top5ListController.updateTop5List)
router.delete('/top5list/:id', auth.verify, Top5ListController.deleteTop5List)
router.get('/top5list/:id', auth.verify, Top5ListController.getTop5ListById)
router.get('/top5lists', auth.verify, Top5ListController.getTop5Lists)
router.get('/top5listpairs', auth.verify, Top5ListController.getTop5ListPairs)

router.post('/register', UserController.registerUser)
router.get('/loggedIn', UserController.getLoggedIn)
router.get('/logout', UserController.logoutUser)
router.post('/login', UserController.logInUser)

router.get('/health', HealthController.healthCheck);
router.get('/mongoHealth', HealthController.mongoHealthCheck);
module.exports = router