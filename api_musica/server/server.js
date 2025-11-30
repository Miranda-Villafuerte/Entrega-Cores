import express, { urlencoded } from 'express'
import cancionrts from './routes/cancion.route.js';
import playlistrts from './routes/playlist.route.js'
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/',cancionrts);
app.use('/api/', playlistrts);

app.listen(port,()=>{
    console.log(`Sí corre ${port}`);
})