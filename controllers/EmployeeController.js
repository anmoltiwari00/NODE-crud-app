let mongoose = require("mongoose");

let Employee = require("../models/Employee");

let employeeController = {};


employeeController.list = (req, res) => {
  Employee.find({}).exec( (err, employees) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/index", {employees: employees});
    }
  });
};


employeeController.show = (req, res) => {
  Employee.findOne({_id: req.params.id}).exec( (err, employee) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
};


employeeController.create = (req, res) => {
  res.render("../views/employees/create");
};


employeeController.save = (req, res) => {
  let employee = new Employee(req.body);

  employee.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/employees/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/employees");
      
    }
  });
};


employeeController.edit = (req, res) => {
  Employee.findOne({_id: req.params.id}).exec( (err, employee) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};


employeeController.update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, (err, employee) => {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees");
  });
};


employeeController.delete = (req, res) => {
  Employee.remove({_id: req.params.id}, (err) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};

module.exports = employeeController;
