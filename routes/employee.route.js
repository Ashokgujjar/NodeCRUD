const express = require('express');
const router = express.Router();

var employee = require("../controllers/employee.controller");

router.get("/test", employee.test);

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);

// Export the router
module.exports = router;

