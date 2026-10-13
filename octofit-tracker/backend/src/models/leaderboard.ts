import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    points: { type: Number, required: true, min: 0, default: 0 },
    rank: { type: Number, min: 1 },
  },
  { timestamps: true },
);

export const leaderboard =
  mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
