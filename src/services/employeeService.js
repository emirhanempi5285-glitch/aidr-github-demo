const Employee = require("../models/employeeModel");

const employees = [

new Employee(

"EMP001",

"John",

"Smith",

"john.smith@crowdstrike-demo.com",

"+1-555-1001",

"Engineering",

"Senior Software Engineer",

125000,

"Michael Brown",

"Full-Time",

"2021-02-15",

"Austin"

),

new Employee(

"EMP002",

"Sarah",

"Johnson",

"sarah.johnson@crowdstrike-demo.com",

"+1-555-1002",

"Human Resources",

"HR Manager",

92000,

"David Wilson",

"Full-Time",

"2019-06-10",

"Chicago"

),

new Employee(

"EMP003",

"Michael",

"Brown",

"michael.brown@crowdstrike-demo.com",

"+1-555-1003",

"Engineering",

"Engineering Director",

165000,

"CTO",

"Full-Time",

"2018-04-18",

"Austin"

),

new Employee(

"EMP004",

"Emily",

"Davis",

"emily.davis@crowdstrike-demo.com",

"+1-555-1004",

"Cyber Security",

"Security Analyst",

145000,

"CISO",

"Full-Time",

"2020-08-11",

"Dallas"

),

new Employee(

"EMP005",

"David",

"Wilson",

"david.wilson@crowdstrike-demo.com",

"+1-555-1005",

"Information Technology",

"System Administrator",

118000,

"CIO",

"Full-Time",

"2022-01-17",

"Seattle"

)

];

exports.getEmployees = () => employees;

exports.getEmployeeById = (id) =>
employees.find(emp => emp.employeeId === id);