let express = require('express');
let router = express.Router();

let employee = require("../controllers/EmployeeController.js");

//get all employees
router.get('/', employee.list);

//get single employee by id
router.get('/show/:id', employee.show);

//create employee
router.get('/create', employee.create);

//save employee
router.post('/save', employee.save);

//edit employee
router.get('/edit/:id', employee.edit);

//edit update
router.post('/update/:id', employee.update);

//edit update
router.post('/delete/:id', employee.delete);

module.exports = router;
