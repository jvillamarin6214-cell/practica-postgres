import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: 'aws-0-us-west-2.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.mavkevrfbfnorzcbowiv',
  password: 'Practica2025'
});