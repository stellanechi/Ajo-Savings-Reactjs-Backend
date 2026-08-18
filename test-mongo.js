import mongoose from 'mongoose';

const uri1 = "mongodb://tradergold97:%40Iamfabulous007@ac-gzrjy6t-shard-00-00.me7xtni.mongodb.net:27017,ac-gzrjy6t-shard-00-01.me7xtni.mongodb.net:27017,ac-gzrjy6t-shard-00-02.me7xtni.mongodb.net:27017/ajoapp?ssl=true&replicaSet=atlas-3w127b-shard-0&authSource=admin&appName=Cluster0";
const uri2 = "mongodb+srv://tradergold97:%40Iamfabulous007@cluster0.me7xtni.mongodb.net/ajoapp?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection(uri, name) {
    console.log(`\nTesting ${name}...`);
    try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log(`✅ ${name} connected successfully!`);
        await mongoose.disconnect();
    } catch (err) {
        console.error(`❌ ${name} failed:`, err.message);
    }
}

async function runTests() {
    await testConnection(uri1, "Original URI (Replica Set)");
    await testConnection(uri2, "Modern URI (mongodb+srv)");
    process.exit(0);
}

runTests();
