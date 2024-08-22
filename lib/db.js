const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL).then((con)=>{
            console.log('DB Connected to host:'+con.connection.host)
        })
        console.log('MongoDB Connected !')
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB