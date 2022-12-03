import inquirer from 'inquirer'
import db from './db/connection.js'


const viewDepartment = async () => {

    try {
        const [results] = await db.promise().query(
            'SELECT * FROM department'
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}

const viewRoles = async () => {
    try {
        const [results] = await db.promise().query(
            'SELECT * FROM role'
            )
            console.table(results)
            mainMenu()
        } catch (err) {
            throw new Error(err)
        }
    }
    

const viewEmployee = async () => {
    try {
        const [results] = await db.promise().query(
            'SELECT * FROM employee'
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}
// Adds new department
const addDepartment = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Name of department you would like to add?`

        },
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO department (name) VALUES (?)', answers.name
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}
// adds role to database
const addRole = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: `Which new role would you like to add?`
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Expected salary:'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which department would you like to add role:',
            choices: [{name: 'Programming', value: 1}, {name: 'Design', value: 2}, {name: 'Sales', value: 3}, { name:'Accounting', value: 4}, {name: 'Management', value: 5}]
        },
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO role (title, salary, dept_id) VALUES (?, ?, ?)'
            , [answers.role, answers.salary, answers.department]
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}
// adds employee to database
const addEmployee = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'First name of employee: '
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Last name of employee: '
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'What role is new employee: ',
            choices: [{ name: 'Programming', value: 1 }, { name: 'Design', value: 2} , { name: 'Sales', value: 3 }, { name:'Accounting', value: 4 }, { name: 'Management', value: 5 }]
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Manager for new employee',
            choices: [{ name: 'Management:', value: 5}, { name: 'Programmer: ', value: 1 }, { name: 'None', value: null }]
        },
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.firstName, answers.lastName, answers.roleId, answers.manager]
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}


// Function to prompt user for inputs from a list of categories

const mainMenu = async () => {
    const answers = await inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            
        ]
    }])

    if (answers.options === 'View all departments') {
        viewDepartment()
    } else if (answers.options === 'View all roles') {
        viewRoles()
    } else if (answers.options === 'View all employees') {
        viewEmployee()
    } else if (answers.options === 'Add a department') {
        addDepartment()
    } else if (answers.options === 'Add a role') {
        addRole()
    } else if (answers.options === 'Add an employee') {
        addEmployee()
    } else {
        return
    }

}


mainMenu()