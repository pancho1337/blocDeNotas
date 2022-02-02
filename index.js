// var validator = require('validator')
// // var chalk = require('chalk')
// const chalk  = require("chalk");
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const helper = require('./helper.js')

// // console.log("this is chalk",chalk)

// console.log(chalk.inverse.green.bold("This should be green"))
// console.log("argv =>", process.argv)
// yargs.version(9.9)
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }, 
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
        console.log("esto es lo que busco ", helper)
        debugger;
        helper.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Remove note from storage",
            demandOption: true, 
            type: "string"
        }
    },
    handler: function(argv){
        helper.removeNote(argv.title)
        console.log("I am removing your note ")
    }
})

yargs.command({
    command: "list",
    describe: "List all the notes",
    handler: function(){
        console.log("I am listing all the notes")
        helper.list()
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Read a note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("I am reading a note")
        helper.read(argv.title)
    }
})


//if we take this out it will not output the data 
//  console.log("Yargs =>", yargs.argv)
yargs.parse()


// NOTE 

// Terminal command 

// node inspect index.js add --title="pikachuz" --body="test"
