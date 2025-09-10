const Recipe = require('../models/recipe-model');

// Create a new recipe
createRecipe = (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a Recipe',
		});
	}
	const recipe = new Recipe(body);
	if (!recipe) {
		return res.status(400).json({ success: false, error: 'Invalid recipe data' });
	}
	recipe.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				recipe: recipe,
				message: 'Recipe Created!'
			});
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: 'Recipe Not Created!'
			});
		});
};

// Update an existing recipe
updateRecipe = async (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a body to update',
		});
	}
	Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
		if (err || !recipe) {
			return res.status(404).json({
				err,
				message: 'Recipe not found!',
			});
		}
		// Update all fields
		recipe.published = body.published;
		recipe.name = body.name;
		recipe.description = body.description;
		recipe.prepTime = body.prepTime;
		recipe.cookTime = body.cookTime;
		recipe.serves = body.serves;
		recipe.raiting = body.raiting;
		recipe.type = body.type;
		recipe.link = body.link;
		recipe.ingredients = body.ingredients;
		recipe.instructions = body.instructions;
		recipe.note = body.note;
		recipe.owner = body.owner;
		recipe.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: recipe._id,
					message: 'Recipe updated!',
				});
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: 'Recipe not updated!',
				});
			});
	});
};

// Get all recipes
getRecipes = async (req, res) => {
	await Recipe.find({}, (err, recipes) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		return res.status(200).json({ success: true, data: recipes });
	}).catch(err => console.log(err));
};

// Delete a recipe by id
deleteRecipe = async (req, res) => {
	Recipe.findById({ _id: req.params.id }, (err, recipe) => {
		if (err || !recipe) {
			return res.status(404).json({
				err,
				message: 'Recipe not found!',
			});
		}
		Recipe.findOneAndDelete({ _id: req.params.id }, () => {
			return res.status(200).json({ success: true, data: recipe });
		}).catch(err => console.log(err));
	});
};

module.exports = {
	createRecipe,
	updateRecipe,
	getRecipes,
	deleteRecipe
};
