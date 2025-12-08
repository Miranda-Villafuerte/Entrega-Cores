import express from "express"
import dotenv from "dotenv"
import connectToDb from "./config/databaseConnect.js";
import cancionrts from "./routes/cancion.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}))


connectToDb();

//route
app.use('/api/cancion/',cancionrts)


app.listen(PORT, ()=> [
    console.log(`The server is up and runing on port ${PORT}`)
])