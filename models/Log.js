import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    id: String,
    timestamp: String,
    groupName: String,
    action: String,
    detail: String
}, { timestamps: true, strict: false });

const Log = mongoose.model('Log', logSchema);
export default Log;
