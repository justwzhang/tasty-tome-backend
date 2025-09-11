const auth = require('../auth');
const express = require('express');

const UserController = require('../controllers/user-controller');
const HealthController = require('../controllers/health-controller');
const RecipeController = require('../controllers/recipe-controller');
const router = express.Router()


// Recipe routes
router.post('/recipe', auth.verify, RecipeController.createRecipe);
router.put('/recipe/:id', auth.verify, RecipeController.updateRecipe);
router.get('/recipes', auth.verify, RecipeController.getRecipes);
router.delete('/recipe/:id', auth.verify, RecipeController.deleteRecipe);
router.post('/register', UserController.registerUser)
router.get('/loggedIn', UserController.getLoggedIn)
router.get('/logout', UserController.logoutUser)
router.post('/login', UserController.logInUser)

router.get('/health', HealthController.healthCheck);
router.get('/mongoHealth', HealthController.mongoHealthCheck);
module.exports = router