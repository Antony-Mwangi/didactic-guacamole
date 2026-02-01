import jwt from "jsonwebtoken";

export function getUserFromToken(token) {
  try {
    // Verify and decode the JWT using your secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { id: decoded.userId, role: decoded.role }; // return what you need
  } catch (err) {
    console.error("Token decode failed:", err);
    return null;
  }
}
