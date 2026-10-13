import mongoose from 'mongoose';
import { activity } from '../models/activity.js';
import { leaderboard } from '../models/leaderboard.js';
import { team } from '../models/team.js';
import { user } from '../models/user.js';
import { workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      user.deleteMany({}),
      team.deleteMany({}),
      activity.deleteMany({}),
      leaderboard.deleteMany({}),
      workout.deleteMany({}),
    ]);

    const [alex, sam] = await user.insertMany([
      { username: 'alex', email: 'alex@example.com', displayName: 'Alex Runner' },
      { username: 'sam', email: 'sam@example.com', displayName: 'Sam Cyclist' },
    ]);
    await team.create({
      name: 'Octofit All-Stars',
      description: 'A friendly team for every activity level.',
      members: [alex._id, sam._id],
    });
    await activity.create({
      user: alex._id,
      type: 'running',
      durationMinutes: 30,
      calories: 280,
    });
    await leaderboard.create([
      { user: alex._id, points: 280, rank: 1 },
      { user: sam._id, points: 180, rank: 2 },
    ]);
    await workout.create({
      name: 'Starter Strength',
      description: 'A simple full-body workout.',
      difficulty: 'beginner',
      durationMinutes: 25,
      exercises: ['Squats', 'Push-ups', 'Plank'],
    });

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
