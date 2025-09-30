import pool from './database.js';
import "./dotenv.js";
import arcData from '../data/arcData.js';



const createArcsTable = async () => {
    const createTableQuery=`
        DROP TABLE IF EXISTS arcs;

        CREATE TABLE IF NOT EXISTS arcs (
            id SERIAL PRIMARY KEY, 
            type VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL, 
            author VARCHAR(255) NOT NULL, 
            image TEXT NOT NULL
        );
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 arcs table created successfully');
    }
    catch (err){
        console.log('⚠️ error creating arcs table', err);
    }
};


const seedArcsTable = async () =>{
    await createArcsTable();
    for (const arc of arcData) {
        const insertQuery = {
        text: 'INSERT INTO arcs (type, title, author, image) VALUES ($1, $2, $3, $4)',
        values: [arc.type, arc.title, arc.author, arc.image],
        };

        try {
        await pool.query(insertQuery); // wait for this insert to complete
        console.log(`✅ ${arc.title} added successfully`);
        } catch (err) {
        console.error(`⚠️ error inserting ${arc.title}`, err);
        }
    }

    console.log('🌟 All arcs inserted in order successfully');
}


seedArcsTable();