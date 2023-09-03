import mongoose from "mongoose";


export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Database connected succefully!');
        })

        connection.on('error', (err) =>{
            console.log('Database connection error, please make sure Mongo is running.' + err)
        })
    }catch (error){
        console.log('Something went wrong');
        console.log(error)

    }
}