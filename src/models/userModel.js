const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  age: {
    type: Number,
    min: [0, 'Age must be a positive number'],
    max: [120, 'Age cannot exceed 120']
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add index for faster queries
userSchema.index({ email: 1 });

// Pre-save middleware example
userSchema.pre('save', function(next) {
  // You could add logic here, like password hashing
  next();
});

// Virtual property example
userSchema.virtual('isAdult').get(function() {
  return this.age >= 18;
});

// Instance method example
userSchema.methods.isActive = function() {
  return this.active;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
