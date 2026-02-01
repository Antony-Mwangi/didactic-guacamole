import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  role: { type: String, default: "student" },
  streak: { type: Number, default: 0 },

  progress: [
    {
      lessonId: mongoose.Schema.Types.ObjectId,
      completed: { type: Boolean, default: false },
      completedAt: Date,
      quizScore: Number,
    },
  ],

  notes: [
    {
      lessonId: mongoose.Schema.Types.ObjectId,
      content: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],

  badges: [
    {
      title: String,
      earnedAt: { type: Date, default: Date.now },
    },
  ],

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
