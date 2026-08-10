const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const validateImage = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image uploaded",
    });
  }

  if (!allowedMimeTypes.includes(req.file.mimetype)) {
    return res.status(400).json({
      success: false,
      message: "Invalid image format. Only JPEG, PNG and WEBP are allowed.",
    });
  }

  next();
};

module.exports = validateImage;