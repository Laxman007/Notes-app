const chalk=require('chalk')
const yargs=require('yargs')


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
    handler:function(argv){
        console.log('title : '+argv.title)
        console.log('body : '+argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler:function(){
        console.log('Removing a note!')
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler:function(){
        console.log('list of notes!')
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read notes',
    handler:function(){
        console.log('Reading the notes!')
    }
})

yargs.parse()