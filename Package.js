const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a package name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price']
  },
  duration: {
    type: String,
    required: [true, 'Please provide duration']
  },
  features: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: ['wedding', 'portrait', 'event', 'commercial', 'other']
  },
  imageUrl: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Package', packageSchema);
