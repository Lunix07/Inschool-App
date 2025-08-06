// src/middleware/verifyAdmin.js
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
    // Token should come from Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach admin info to request for further use
        req.admin = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyAdmin;
