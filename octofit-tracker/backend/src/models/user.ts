import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    displayName: { type: String, required: true, trim: true },
    profile: {
      bio: { type: String, default: '' },
      avatarUrl: { type: String, default: '' },
    },
  },
  { timestamps: true },
);

export const user = mongoose.models.User || mongoose.model('User', userSchema);
