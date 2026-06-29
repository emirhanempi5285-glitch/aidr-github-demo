const payroll = [

    {
        employeeId: "EMP001",
        employeeName: "John Smith",
        basicSalary: 125000,
        bonus: 15000,
        tax: 28000,
        netSalary: 112000,
        bank: "Bank of America",
        accountNumber: "XXXX-4589"
    },

    {
        employeeId: "EMP002",
        employeeName: "Sarah Johnson",
        basicSalary: 92000,
        bonus: 10000,
        tax: 18000,
        netSalary: 84000,
        bank: "Chase Bank",
        accountNumber: "XXXX-8912"
    },

    {
        employeeId: "EMP003",
        employeeName: "Michael Brown",
        basicSalary: 165000,
        bonus: 22000,
        tax: 42000,
        netSalary: 145000,
        bank: "Wells Fargo",
        accountNumber: "XXXX-7721"
    }

];

exports.getPayroll = () => payroll;

exports.getPayrollByEmployee = (id) =>
    payroll.find(record => record.employeeId === id);