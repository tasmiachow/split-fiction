import pool from "../config/database.js";


const getArcs = async (req, res) => {
    try{
        const results = await pool.query(`SELECT * FROM arcs ORDER BY id ASC;`);
        res.status(200).json(results.rows);
    }
    catch(error){
        res.status(409).json({ error: error.message})
    }
}

const getArcById = async (req, res) => {
  const { arcId } = req.params; // pull arcId from URL
  try {
    const result = await pool.query(`SELECT * FROM arcs WHERE id = $1`, [arcId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Arc not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getArcs,
  getArcById, 
};