import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lessonId: Number,       // 0, 1, 2
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Progress || mongoose.model("Progress", ProgressSchema);
