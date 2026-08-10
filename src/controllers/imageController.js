const path = require("path");

const {
  getImageMetadata,
  analyzeImageQuality,
  optimizeImage,
} = require("../services/imageProcessingService");

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image uploaded",
    });
  }

  try {
    // Original uploaded image
    const imagePath = path.resolve(req.file.path);

    // Get metadata
    const metadata = await getImageMetadata(imagePath);

    // Analyze quality
    const quality = await analyzeImageQuality(imagePath);

    // Create processed image
    const processedFilename = `processed-${Date.now()}.jpg`;

    const processedPath = path.resolve(
      "processed",
      processedFilename
    );

    // Optimize and resize
    await optimizeImage(imagePath, processedPath);

    res.status(201).json({
      success: true,

      message: "Image uploaded and processed successfully",

      processing: {
        status: "completed",
        optimized: true,
        resized: true,
      },

      file: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype,
      },

      imageMetadata: metadata,

      imageQuality: quality,

      processedImage: {
        filename: processedFilename,
        path: path.join("processed", processedFilename),
      },
    });
  } catch (error) {
    console.error("Image processing failed:", error);

    res.status(500).json({
      success: false,
      message: "Image processing failed",
      error: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};