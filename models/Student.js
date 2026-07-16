const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    courses: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;