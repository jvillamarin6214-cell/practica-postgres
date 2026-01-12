import { pool } from './db.js';

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa a la base de datos');
    console.log('Hora del servidor:', result.rows[0].now);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
}

testConnection();