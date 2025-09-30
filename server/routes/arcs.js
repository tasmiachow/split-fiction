import express from'express';
import path from 'path';
import { fileURLToPath } from 'url';
import arcData from '../data/arcData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();



router.get('/', (req, res) =>{
    res.status(200).json(arcData);
});

router.get('/:arcId', (req, res) =>{
    const { arcId } = req.params;
    const arc = arcData.find(a => String(a.id) === arcId);

    if (!arc) {
        return res.status(404).json({ error: "Arc not found" });
    }

    res.status(200).json(arc);
});

export default router;
