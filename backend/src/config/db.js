const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL DB'))
  .catch(err => console.error('❌ DB connection error:', err));

module.exports = pool;
