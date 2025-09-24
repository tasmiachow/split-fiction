import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import arcsRouter from './routes/arcs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;


app.use('/arcs', arcsRouter);
app.use(express.static(path.join(__dirname, '..', 'public')));



app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});