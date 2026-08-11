# Vehicle Image Processing Pipeline

This project is a simple image processing API built using Node.js and Express.

It allows users to upload vehicle images, checks the image, extracts basic information, analyzes the image quality, and creates an optimized version of the image.

## What this project does

- Uploads a vehicle image
- Checks whether the uploaded file is a valid image
- Gets image details like width, height, format, and channels
- Calculates basic image quality values
- Calculates the average brightness of the image
- Resizes large images
- Converts and saves the image as an optimized JPEG
- Returns the processing details as a JSON response

## Technologies Used

- Node.js
- Express.js
- Multer
- Sharp
- dotenv
- CORS

## Project Structure

```text
vehicle-image-processing-pipeline
│
├── src
│   ├── controllers
│   │   └── imageController.js
│   ├── middleware
│   │   └── imageValidation.js
│   ├── routes
│   │   └── imageRoutes.js
│   ├── services
│   │   └── imageProcessingService.js
│   ├── server.js
│   └── test.http
│
├── uploads
│   └── .gitkeep
│
├── processed
│   └── .gitkeep
│
├── .gitignore
├── package.json
└── package-lock.json
How to Run

First install the required packages:

npm install

Create a .env file in the project folder:

PORT=5000

Then start the server:

npm start

The server will run at:

http://localhost:5000
API
Upload Image
POST /api/images/upload

The request should use:

multipart/form-data

The file field name should be:

image

The API can be tested using Postman.

Example Response
{
  "success": true,
  "message": "Image uploaded and processed successfully",
  "processing": {
    "status": "completed",
    "optimized": true,
    "resized": true
  },
  "imageMetadata": {
    "format": "jpeg",
    "width": 1400,
    "height": 972
  },
  "imageQuality": {
    "brightness": 98.94,
    "redMean": 99.02,
    "greenMean": 99.9,
    "blueMean": 97.89
  },
  "processedImage": {
    "filename": "processed-XXXXXXXX.jpg",
    "path": "processed\\processed-XXXXXXXX.jpg"
  }
}
Image Processing Flow
Upload Image
     ↓
Image Validation
     ↓
Get Image Metadata
     ↓
Analyze Image Quality
     ↓
Resize Image
     ↓
Optimize Image
     ↓
Save Processed Image
     ↓
Return JSON Response
Image Optimization

The uploaded image is resized to a maximum width of 1200 pixels.

The original aspect ratio is maintained.

The processed image is saved as a JPEG with optimized quality.

Testing

I tested the API using Postman with a vehicle image.

The API successfully:

Uploaded the image
Extracted image metadata
Calculated image quality
Resized the image to 1200 pixels
Created the processed image
Returned the processing result
Note

Uploaded and processed images are not included in the GitHub repository.

They are ignored using .gitignore.

Author

Sathish R


## Project Workflow

1. Upload a vehicle image through the API.
2. Validate the uploaded image.
3. Process and optimize the image.
4. Analyze image quality and metadata.
5. Store the processed image.
6. Return the processing result through the API.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Image Processing
- REST API
- File Upload Handling