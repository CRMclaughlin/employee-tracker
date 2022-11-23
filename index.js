// functions 
// find all employees
// return connection promise
// connecting to the database
// using sql to query the database

import inquirer from 'inquirer'
import db from './db/connection.js'
import mysql from 'mysql2'


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
            'SELECT * FROM roles'
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

const addDepartment = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: `Name of department you'd like to add?`
        }
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO department (deptName) VALUES ?', answers.name
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}

const addRole = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: `Which new role would you like to add?`
        }
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO position (addRole) VALUES ?', answers.name
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}

const addEmployee = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'addEmp',
            message: `Which new employee would you like to add?`
        }
    ])
    try {
        const [results] = await db.promise().query(
            'INSERT INTO employee (addEmp) VALUES ?', answers.name
        )
        console.table(results)
        mainMenu()
    } catch (err) {
        throw new Error(err)
    }
}

// const updateEmployee = async () => {
//     const answers = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'addRole',
//             message: `Which new role would you like to add?`
//         }
//     ])
//     try {
//         const [results] = await db.promise().query(
//             'INSERT INTO role (addRole) VALUES ?', answers.name
//         )
//         console.table(results)
//         mainMenu()
//     } catch (err) {
//         throw new Error(err)
//     }
// }



const mainMenu = async () => {
    const answers = await inquirer.prompt([{
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
    } else if (answers.choices === 'Add a role') {
        addRole()
    } else if (answers.choices === 'Add an employee') {
        addEmployee()
    } else if (answers.choices === 'Update employee') {
        updateEmployee()
    } else {
        return
    }

}

mainMenu()