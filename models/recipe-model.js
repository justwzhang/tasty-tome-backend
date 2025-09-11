const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    published: { type: Boolean, required: true, default: false },
    name: { type: String, required: true, default: '' },
    description: { type: String, required: false, default: '' },
    prepTime: { type: String, required: false, default: '' },
    cookTime: { type: String, required: false, default: '' },
    serves: { type: Number, required: false, default: 0 },
    raiting: { type: Number, required: false, default: 0 },
    type: { type: String, required: true, default: '' },
    link: { type: String, required: false, default: '' },
    ingredients: { type: [String], required: true, default: [] },
    instructions: { type: [String], required: true, default: [] },
    note: { type: String, required: false, default: '' },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
