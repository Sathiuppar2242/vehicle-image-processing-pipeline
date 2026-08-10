const sharp = require("sharp");

const getImageMetadata = async (imagePath) => {
  const metadata = await sharp(imagePath).metadata();

  return {
    format: metadata.format,
    width: metadata.width,
    height: metadata.height,
    size: metadata.size,
    space: metadata.space,
    channels: metadata.channels,
  };
};

const analyzeImageQuality = async (imagePath) => {
  const stats = await sharp(imagePath).stats();

  const redMean = stats.channels[0].mean || 0;
  const greenMean = stats.channels[1].mean || 0;
  const blueMean = stats.channels[2].mean || 0;

  const brightness = (redMean + greenMean + blueMean) / 3;

  return {
    brightness: Number(brightness.toFixed(2)),
    redMean: Number(redMean.toFixed(2)),
    greenMean: Number(greenMean.toFixed(2)),
    blueMean: Number(blueMean.toFixed(2)),
  };
};

const optimizeImage = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 80,
    })
    .toFile(outputPath);

  return outputPath;
};

module.exports = {
  getImageMetadata,
  analyzeImageQuality,
  optimizeImage,
};