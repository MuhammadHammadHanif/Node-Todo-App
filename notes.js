const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, description) => {
    let notes = loadNotes()
   
    const duplicateData = notes.find(note =>  note.title === title ? true : false)
    
    if(!duplicateData)
    {
        const newData = {
            title,
            description
        }
        notes = [...notes, newData]
        saveNotes(notes)
        console.log(chalk.green.inverse('Add Note'))
    }
    else
    {
        console.log(chalk.red.inverse('Title already present'))
    }
    
}

const saveNotes = (notes) => {
    const JSONParse = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONParse)
}

const loadNotes = () => {
    try
    {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}

const removeNote = (title) => {
    let notes = loadNotes()
    const checkNote = notes.filter(note => note.title !== title)
    if(notes.length > checkNote.length){

        console.log(chalk.green.inverse('Note Removed!'))
    }  
    else
    {
        console.log(chalk.red.inverse('No Note Found!')) 
    }
    saveNotes(checkNote)
}

const listNotes= () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue('Your Notes'))
    notes.forEach(note => {
        console.group()
        console.log('Title: ', note.title)
        console.groupEnd()
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const checkNote = notes.find(note => note.title === title)
    if(checkNote)
    {
        console.log(chalk.blue.inverse(checkNote.title)+ ' '+checkNote.desription)
    }
    else
    {
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

module.exports= {
    addNote,
    removeNote,
    listNotes,
    readNote
}