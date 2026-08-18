import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    id: String,
    name: String,
    hubLocation: String,
    description: String,
    contributionAmount: Number,
    frequency: String,
    penaltyFee: Number,
    startDate: String,
    currentCycleIndex: Number,
    totalCycles: Number,
    trustee: String,
    trusteeContact: String,
    members: mongoose.Schema.Types.Mixed,
    contributions: mongoose.Schema.Types.Mixed,
    payoutSchedule: mongoose.Schema.Types.Mixed
}, { timestamps: true, strict: false });

const Group = mongoose.model('Group', groupSchema);
export default Group;
