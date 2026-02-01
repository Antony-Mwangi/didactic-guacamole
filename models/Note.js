import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lessonId: Number,        // your lessons are numbers: 0,1,2
  content: String,
  images: [String],        // base64 or image URLs
});

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
