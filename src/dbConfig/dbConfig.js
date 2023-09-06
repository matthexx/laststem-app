import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Database connected successfully!');
        });

        connection.on('error', (err) => {
            console.error('Database connection error:', err); // Log the error
        });
    } catch (error) {
        console.error('Error connecting to the database:', error); // Log the error
    }
}
