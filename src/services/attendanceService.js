const attendance = [

    {
        employeeId: "EMP001",
        employeeName: "John Smith",
        date: "2026-06-29",
        checkIn: "09:02",
        checkOut: "18:05",
        workHours: 9,
        status: "Present",
        workMode: "Office"
    },

    {
        employeeId: "EMP002",
        employeeName: "Sarah Johnson",
        date: "2026-06-29",
        checkIn: "08:57",
        checkOut: "17:41",
        workHours: 8.7,
        status: "Present",
        workMode: "Remote"
    },

    {
        employeeId: "EMP003",
        employeeName: "Michael Brown",
        date: "2026-06-29",
        checkIn: "09:11",
        checkOut: "18:16",
        workHours: 9,
        status: "Present",
        workMode: "Office"
    },

    {
        employeeId: "EMP004",
        employeeName: "Emily Davis",
        date: "2026-06-29",
        checkIn: "--",
        checkOut: "--",
        workHours: 0,
        status: "On Leave",
        workMode: "-"
    }

];

exports.getAttendance = () => attendance;

exports.getAttendanceByEmployee = (id) =>
    attendance.filter(record => record.employeeId === id);