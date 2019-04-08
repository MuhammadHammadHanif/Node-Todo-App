# NODE TODO-APP
An application in which you can add, remove, read, list all your tasks.

## Installation
Download or clone the project and use npm install to install all the necessary modules associated with the application.

## Entry Point
App.js

## Command
1. Add Task (Need 2 required arguments Title and Description)
    - node app.js add --title="your title" --description="your description"
2. Remove Task (Need 1 required arguments Title)
    - node app.js remove --title="your title"
3. Read Task (Need 1 required arguments Title)
    - node app.js read --title="your title"
4. List all Tasks (No arguments required)
    - node app.js list

## Help
To check all the required parameters and type of the commands use node app.js (your command) --help
example node app.js add --help