const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

// create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }


    },
    handle(argv){
       notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        console.log('list of notes!')
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read notes',
    handler(){
        console.log('Reading the notes!')
    }
})

yargs.parse()
