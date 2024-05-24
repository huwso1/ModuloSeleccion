import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  connectString: process.env.CONNECTION_STRING
};

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Connection pool started');
  } catch (err) {
    console.error('Error starting connection pool', err);
    throw err;
  }
}

async function close() {
  try {
    await oracledb.getPool().close(0);
    console.log('Connection pool closed');
  } catch (err) {
    console.error('Error closing connection pool', err);
    throw err;
  }
}

export { initialize, close };