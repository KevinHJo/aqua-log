const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  logType: {
    type: String,
    required: true
  },
  value: {
    type: Schema.Types.Decimal128,
    required: true
  },
  tank: {
    type: Schema.Types.ObjectId,
    ref: 'tanks', 
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = Log = mongoose.model('Log', LogSchema);