import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import Note from "@/models/Note";
import Progress from "@/models/Progress";
import Badge from "@/models/Badge";

connectDB();

// Helper: get user from JWT token
async function getUserFromToken(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return null;

  const token = authHeader.split(" ")[1];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    return user;
  } catch (err) {
    console.error("Token decode failed:", err);
    return null;
  }
}

export async function GET(req) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    // Fetch notes
    const notes = await Note.find({ user: user._id });

    // Fetch progress
    const progress = await Progress.find({ user: user._id });

    // Fetch badges
    const badges = await Badge.find({ userId: user._id });

    return NextResponse.json({
      user,
      notes,
      progress,
      badges,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to fetch dashboard" }, { status: 500 });
  }
}

export async function POST(req) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  try {
    // Update profile
    if (body.name) {
      user.name = body.name;
      await user.save();
    }

    // Update streak
    if (typeof body.streak === "number") {
      user.streak = body.streak;
      await user.save();
    }

    // Update progress
    if (body.progress) {
      for (let p of body.progress) {
        const existing = await Progress.findOne({ user: user._id, lessonId: p.lessonId });
        if (existing) {
          existing.completed = p.completed;
          await existing.save();
        } else {
          await Progress.create({ user: user._id, lessonId: p.lessonId, completed: p.completed });
        }
      }
    }

    // Update notes
    if (body.notes) {
      for (let n of body.notes) {
        const existingNote = await Note.findOne({ user: user._id, lessonId: n.lessonId });
        if (existingNote) {
          existingNote.content = n.content;
          existingNote.images = n.images || [];
          await existingNote.save();
        } else {
          await Note.create({
            user: user._id,
            lessonId: n.lessonId,
            content: n.content,
            images: n.images || [],
          });
        }
      }
    }

    return NextResponse.json({ message: "Dashboard updated successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to update dashboard" }, { status: 500 });
  }
}
