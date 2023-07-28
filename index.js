
const express = require('express')
const app = express();
const moongose = require('mongoose');

require('dotenv').config();

let PORT = process.env.PORT || 4000

async function main() {
    return await moongose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.6sujrau.mongodb.net/?retryWrites=true&w=majority`)
}

let PO = main();
PO
    .then((d) => {
        console.log('connected')

        //const student = new moongose.model('student',{name:String})

        //const Po = new student({name:"Ankit"})

       // Po.save().then(d=>console.log("data saved successfully")).catch(e=>console.log('error'))
 
       const studentSchema = new moongose.Schema({
                                                    id:Number ,
                                                    name:String            
                                                            })

     const student = moongose.model('student',studentSchema)

     const Po = new student({
                              id:1,
                              name:'Ankit Tanwar'      
                                })
    
    Po.save().then(d=>console.log("data succesfully saved")).catch(e=>console.log('error'))
        
    }

    )

    .catch(e => console.log('error'))


app.listen(PORT, () => {
    console.log(`this server is running PORT ${PORT}`)
})

