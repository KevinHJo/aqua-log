const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  ammonia: {
    type: Schema.Types.Decimal128,
    required: false
  },
  nitrite: {
    type: Schema.Types.Decimal128,
    required: false
  },
  nitrate: {
    type: Schema.Types.Decimal128,
    required: false
  },
  temperature: {
    type: Schema.Types.Decimal128,
    required: false
  },
  pH: {
    type: Schema.Types.Decimal128,
    required: false
  },
  salinity: {
    type: Schema.Types.Decimal128,
    required: false
  },
  calcium: {
    type: Schema.Types.Decimal128,
    required: false
  },
  alkalinity: {
    type: Schema.Types.Decimal128,
    required: false
  },
  magnesium: {
    type: Schema.Types.Decimal128,
    required: false
  },
  phosphate: {
    type: Schema.Types.Decimal128,
    required: false
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