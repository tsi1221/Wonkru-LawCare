const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    sub: {
      type: String,
      unique: true,
      sparse: true, // Allows null but still enforces uniqueness when present
    },
    name: String,
    email: { type: String, unique: true, required: true },
    password: String, // Hashed password
    picture: String,
    gender: String,
    phone_number: String,
    birthdate: String,
    address: String,
    role: { type: String, enum: ['user', 'lawyer', 'admin'], default: 'user' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
