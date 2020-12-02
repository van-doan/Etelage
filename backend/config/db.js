/////////////////////////
// DATABASE CONNECTION //
/////////////////////////
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = 
    await
      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log(`Database is connected: ${(await connect).connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB