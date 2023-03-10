const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.rj7kz6u.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .catch((err) => console.log(err))

if (process.argv.length === 3 ){
    console.log("phonebook:")
    Person
        .find({})
        .then(result => {
        result.forEach(person => {
        console.log(person.name,person.number)
        })
        mongoose.connection.close()
        })
}

if (process.argv.length > 3 ){
    const name= process.argv[3]
    const number =process.argv[4]
    const person = new Person({
        name: name,
        number: number
    })

    person.save()
        .then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}
