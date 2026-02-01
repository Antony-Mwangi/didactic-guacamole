import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  earnedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Badge || mongoose.model("Badge", BadgeSchema);
