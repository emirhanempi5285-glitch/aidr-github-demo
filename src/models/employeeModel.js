class Employee {

    constructor(
        employeeId,
        firstName,
        lastName,
        email,
        phone,
        department,
        designation,
        salary,
        manager,
        employmentType,
        joiningDate,
        location
    ) {

        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.manager = manager;
        this.employmentType = employmentType;
        this.joiningDate = joiningDate;
        this.location = location;

    }

}

module.exports = Employee;