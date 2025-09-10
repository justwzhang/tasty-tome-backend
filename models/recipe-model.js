const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    published: { type: Boolean, required: true, default: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
    serves: { type: Number, required: true },
    raiting: { type: Number, required: true },
    type: { type: String, required: true },
    link: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    note: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
