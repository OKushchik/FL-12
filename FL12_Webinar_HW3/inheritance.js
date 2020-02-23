let obj = {
    id: 1,
    firstName: 'Peter',
    lastName: 'Anderson',
    birthday: '1990-02-25',
    salary: 5000,
    position: 'manager',
    department: 'sales'
};
let obj2 = {
    id: 2,
    firstName: 'Jack',
    lastName: 'Anderson',
    birthday: '1990-02-25',
    salary: 5000,
    position: 'manager',
    department: 'sales'
};
let benefits = {
    salary: 10000,
    position: 'prof',
    department: 'direct',
};
let punishment = {
    salary: 2000,
    position: 'sales',
    department: 'sales',
};

class Employee {
    constructor(obj) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.birthday = obj.birthday;
        this.salary = obj.salary;
        this.position = obj.position;
        this.department = obj.department;
    }
    static EMPLOYEES = [];

    getAge(){
        let age =  (new Date()).getFullYear() - new Date(this.birthday).getFullYear();
        console.log(age);
    }
    getFullName (){
        let fullName = `${this.firstName}  ${this.lastName}`
        console.log(fullName);
    }
    alert (){
        console.log(Employee.EMPLOYEES);
    }
    quit() {
        let indexDel;
        if (Employee.EMPLOYEES.includes(this)){
            for (let i = 0; i<Employee.EMPLOYEES.length; i++){
                if (Employee.EMPLOYEES[i].id === this.id ){
                    indexDel = i;
                }
            }
        }
        Employee.EMPLOYEES.splice(indexDel,1);
    }
    retire() {
        this.quit();
        console.log('It was such a pleasure to work with you!');

    }
    getFired() {
        this.quit();
        console.log('Not a big deal!');
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    getPromoted(benefits) {
        for (let key in benefits) {
            switch (key) {
                case 'salary':
                    this.changeSalary(benefits[key]);
                    break;
                case 'position':
                    this.changePosition(benefits[key]);
                    break;
                case 'department':
                    this.changeDepartment(benefits[key]);
                    break;
            }
        }
        console.log('Yoohooo!');
    }
    getDemoted(punishment) {
        for (let key in punishment) {
            switch (key) {
                case 'salary':
                    this.changeSalary(punishment[key]);
                    break;
                case 'position':
                    this.changePosition(punishment[key]);
                    break;
                case 'department':
                    this.changeDepartment(punishment[key]);
                    break;
            }
        }
        console.log('Damn!');
    }
}

let employee = new Employee(obj);
Employee.EMPLOYEES.push(employee);
let employee1 = new Employee(obj2);
Employee.EMPLOYEES.push(employee1);

employee.getDemoted(punishment);
employee1.getPromoted(benefits);
console.log(Employee.EMPLOYEES);

class Manager extends Employee {
    constructor(obj) {
        super(obj);
        this.position = 'manager';
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor(obj) {
        super(obj);
        this.department = 'hr';
    }
}

class SalesManager extends Manager {
    constructor(obj) {
        super(obj);
        this.department = 'sales';
    }
}