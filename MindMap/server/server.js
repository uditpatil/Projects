const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotnenv = require('dotenv');
const bodyParser = require('body-parser');

dotnenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));


require("./config/mongoose.config");
require("./routes/mindmap.routes")(app);

app.listen(8000, ()=>console.log("Listening on Port 8000"));