import mongoose from "mongoose";

// Connect database 

const connectdb = async () => {
    try {
        const db_url = process.env.DB_URL
        const options_db = {
            dbName: process.env.DB_NAME
        }

        await mongoose.connect(db_url, options_db)
        console.log('database connections is sucessfully created')
    }
    catch (error) {
        console.log('This error create for connectdb from connections.js')
        console.log(error)
    }
}
export default connectdb

