const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    content: String
  },
  {
    timestamps: {
      createdAt: '$createdAt',
      updatedAt: '$updatedAt'
    }
  }
)

module.exports = mongoose.model('', schema)