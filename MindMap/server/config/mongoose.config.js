const mongoose = require("mongoose");
const dbName = "mindmap";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`We are connected to database ${dbName}`)
    })
    .catch((err) => {
        console.log(`there is a problem connecting to database ${dbName}, here are the error logs: `, err)
    })