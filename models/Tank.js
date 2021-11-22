const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TankSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
});

module.exports = Tank = mongoose.model('tank', TankSchema);