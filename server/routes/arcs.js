import express from'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ArcsController from '../controllers/arcs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();



router.get('/', ArcsController.getArcs);


router.get('/api/:arcId', ArcsController.getArcById);


router.get('/:arcId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/arc.html'));
});

export default router;