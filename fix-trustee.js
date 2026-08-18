import mongoose from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';
dotenv.config();

async function fix() {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteOne({ email: 'trustee@ajo.com' });
    console.log('Deleted old trustee. Nodemon will recreate it cleanly!');
    process.exit(0);
}
fix();
