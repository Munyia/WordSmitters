const mongoose =require('mongoose');

const connectdb =async ()=> {
try{
    const conn= await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`connected to ${conn.connection.host}`);
}catch(error) {
    console.log(`Error connecting ${error.message}`);
    process.exit(1);
}
};

module.exports = connectdb