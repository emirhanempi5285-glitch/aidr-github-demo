const leaveRequests = [

    {
        leaveId: "LV001",
        employeeId: "EMP001",
        employeeName: "John Smith",
        leaveType: "Annual Leave",
        startDate: "2026-07-10",
        endDate: "2026-07-15",
        status: "Approved",
        approver: "Michael Brown"
    },

    {
        leaveId: "LV002",
        employeeId: "EMP002",
        employeeName: "Sarah Johnson",
        leaveType: "Sick Leave",
        startDate: "2026-06-20",
        endDate: "2026-06-22",
        status: "Approved",
        approver: "David Wilson"
    },

    {
        leaveId: "LV003",
        employeeId: "EMP004",
        employeeName: "Emily Davis",
        leaveType: "Maternity Leave",
        startDate: "2026-08-01",
        endDate: "2026-11-01",
        status: "Pending",
        approver: "HR Director"
    }

];

exports.getLeaves = () => leaveRequests;

exports.getLeaveByEmployee = (id) =>
    leaveRequests.filter(record => record.employeeId === id);