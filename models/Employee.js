let mongoose = require('mongoose');

let EmployeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  position: String,
  salary: Number,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
