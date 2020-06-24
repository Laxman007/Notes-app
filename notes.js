const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>{
    console.log('Your Notes...')
    const notes=loadNotes()
    notes.forEach(note => {
        console.log('Title : '+ note.title)    
    });
}

const addNote=(title,body)=>{
    const notes=loadNotes()

    const duplicateNotes=notes.filter((note)=>{
        return note.title===title
    })

    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'))
    }else{
        console.log(chalk.red.inverse('Note title is already taken!!'))
    }
    
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const newNotes=notes.filter((note)=>{
        return note.title!==title
    })

    saveNotes(newNotes)
    if(newNotes.length===notes.length){
        console.log(chalk.red.inverse('No note found!'))
    }
    else{
        console.log(chalk.green.inverse('Note Removed!'))
    }
}

const readNotes=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=> note.title===title)
    if(note){
        console.log('Title:'+ note.title)
        console.log('Body:' + note.body)
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{

    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }   
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    readNotes:readNotes
}