import Group from '../models/Group.js';

export const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.json(groups);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const syncGroups = async (req, res) => {
    try {
        const groups = req.body;
        for (const g of groups) {
            await Group.findOneAndUpdate({ id: g.id }, g, { upsert: true, new: true });
        }
        res.json({ success: true, message: 'Groups synced successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
