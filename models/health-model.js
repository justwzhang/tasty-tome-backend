const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const HealthSchemoa = new Schema(
    {
        health: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Health', HealthSchemoa)
