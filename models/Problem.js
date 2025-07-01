import mongoose from 'mongoose'

const probSchema = new mongoose.Schema({
    id: Number,
    category: String,
    title: String,
    description: String,
    curOutput: String,
    correctOutput: String,
    difficulty: String,
    rawCode: String
}, { timestamps: true })

const Problem = mongoose.model('Problem', probSchema);

export default Problem;