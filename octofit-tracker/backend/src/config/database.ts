import mongoose from 'mongoose';

export const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

export async function connectDatabase(): Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  try {
    await mongoose.connect(connectionString, { dbName: 'octofit_db' });
    console.log('Connected to octofit_db');
    return mongoose;
  } catch (error) {
    console.error('Error connecting to octofit_db:', error);
    throw error;
  }
}

export const db = mongoose.connection;
