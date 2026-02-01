// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const { name, email, password } = await req.json();

//     // Validate input
//     if (!name || !email || !password) {
//       return new Response(
//         JSON.stringify({ message: "All fields are required" }),
//         { status: 400 }
//       );
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return new Response(
//         JSON.stringify({ message: "User already exists" }),
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     // Generate JWT
//     const token = jwt.sign(
//       { userId: newUser._id, role: newUser.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     // Return success
//     return new Response(
//       JSON.stringify({
//         message: "Signup successful",
//         token,
//         user: {
//           name: newUser.name,
//           email: newUser.email,
//           role: newUser.role,
//         },
//       }),
//       { status: 201 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ message: "Server error", error }),
//       { status: 500 }
//     );
//   }
// }


import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    // Ensure JWT secret exists
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing");
    }

    // Generate token
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Success response
    return new Response(
      JSON.stringify({
        message: "Signup successful",
        token,
        user: {
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}
