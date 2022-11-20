// functions 
// find all employees
// return connection promise
// connecting to the database
// using sql to query the database

import inquirer from 'inquirer'
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const viewDepartment

const viewRoles

const viewEmployee

const addDepartment

const addRole

const addEmployee

const updateEmployee


const mainMenu = async () => {
    const options = await inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'Choose an option',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee']
    }])

    if (answers.options === 'View all departments') {
        viewDepartment()
    } 
}