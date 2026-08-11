const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const imageRoutes = require("./routes/imageRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Serve uploaded and processed images
app.use("/uploads", express.static("uploads"));
app.use("/processed", express.static("processed"));

// Health check
app.get("/", (req, res) => {
res.json({
success: true,
message: "Vehicle Image Processing API is running",
status: "healthy",
environment: process.env.NODE_ENV || "development",
timestamp: new Date().toISOString(),
});
});  });
});

// Image routes
app.use("/api/images", imageRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
console.error("Server error:", err);

res.status(500).json({
success: false,
message: "Internal server error",
method: req.method,
path: req.originalUrl,
error: err.message,
});
});

app.listen(PORT, () => {
console.log("========================================");
console.log("Vehicle Image Processing API");
console.log(`Server running on http://localhost:${PORT}`);
console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
console.log("========================================");
});
});