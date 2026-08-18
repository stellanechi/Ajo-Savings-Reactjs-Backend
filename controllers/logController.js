import Log from '../models/Log.js';

export const getLogs = async (req, res) => {
    try {
        // Sort by timestamp descending
        const logs = await Log.find({}).sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const syncLogs = async (req, res) => {
    try {
        const logs = req.body;
        for (const log of logs) {
            await Log.findOneAndUpdate({ id: log.id }, log, { upsert: true, new: true });
        }
        res.json({ success: true, message: 'Logs synced successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
