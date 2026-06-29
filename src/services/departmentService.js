const departments = [

    {
        departmentId: "DEP001",
        name: "Engineering",
        manager: "Michael Brown",
        location: "Austin",
        employeeCount: 48
    },

    {
        departmentId: "DEP002",
        name: "Human Resources",
        manager: "Sarah Johnson",
        location: "Chicago",
        employeeCount: 12
    },

    {
        departmentId: "DEP003",
        name: "Finance",
        manager: "David Miller",
        location: "New York",
        employeeCount: 18
    },

    {
        departmentId: "DEP004",
        name: "Cyber Security",
        manager: "Emily Davis",
        location: "Dallas",
        employeeCount: 22
    },

    {
        departmentId: "DEP005",
        name: "Information Technology",
        manager: "David Wilson",
        location: "Seattle",
        employeeCount: 30
    }

];

exports.getDepartments = () => departments;

exports.getDepartmentById = (id) =>
    departments.find(dep => dep.departmentId === id);