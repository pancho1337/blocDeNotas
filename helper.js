const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    console.log("getting notes")
}


const list = () => {
    const notes = loadNotes()
    notes.forEach((el) => {
        console.log(chalk.yellow.inverse(`Title: ${el.title} => Body: ${el.body}`))
    })
}

const addNote = function(title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(el => el.title === title ? true : false)
    const duplicateNotes = notes.find(el => el.title === title)
    // console.log("arguments => ", title , body,"notes", duplicateNotes)
    if(!duplicateNotes){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note has been saved"))
    } else {
        console.log(chalk.red.inverse("Note was not saved"))
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const newArr = notes.filter(el => el.title !== title)
    notes.length > newArr.length ? console.log(chalk.green.inverse("note was removed")) : console.log(chalk.red.inverse("Error: note not removed"))
    saveNotes(newArr)
}

const saveNotes = function(notes){
    let jsonFile = JSON.stringify({notes: notes})
    // console.log("jsonFile", jsonFile)
    fs.writeFileSync("data.json", jsonFile)

}

const loadNotes = function(){
    let file = JSON.parse(fs.readFileSync("data.json").toString())
    // console.log("1. loadNOtes =>", file.notes)
    return file.notes
}

const read = function(title) {
    let notes = loadNotes()
    let match = notes.find(el => el.title === title)
    if(match){
        console.log(chalk.magenta.inverse(`Title: ${match.title}`))
        console.log(chalk.cyan.inverse(`body: ${match.body}`))
    } else {
        console.log(chalk.red.inverse("No note was found"))
    }

}

module.exports = { addNote, removeNote, list, read}
