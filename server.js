// functions 
// find all employees
// return connection promise
// connecting to the database
// using sql to query the database

import inquirer from 'inquirer'
import db from './db/connection'

dotenv.config()

const viewDepartment = async () => {
    try {
        const [results] = await db.promise().query(
            'SELECT FROM department'
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}

// const viewRoles

// const viewEmployee

// const addDepartment

// const addRole

// const addEmployee

// const updateEmployee


const mainMenu = async () => {
    const choices = await inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'Choose an option',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee']
    }])

    if (answers.choices === 'View all departments') {
        viewDepartment()
    } else if (answers.choices === 'View all roles') {
        viewRoles()
    } else if (answers.choices === 'View all employees') {
        viewEmployee()
    } else if (answers.choices === 'Add a department') {
        addDepartment()
    } else if (answer.choices === 'Add a role') {
        addRole()
    } else if (answers.choices === 'Add an employee') {
        addEmployee()
    } else if (answers.choices === 'Update employee') {
        updateEmployee()
    } else {
        return
    }

}