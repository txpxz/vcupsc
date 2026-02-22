# Image Upscaler App

## Overview
The Image Upscaler App is a desktop application designed to upscale images in various formats, including JPG and JPEG. Users can select the desired upscale quantity (2x or 4x) and choose between English and Russian languages. The app provides a user-friendly interface for uploading images and viewing their upscaled versions.

## Features
- Upscale images by 2x or 4x.
- Supports multiple image formats (JPG, JPEG, and more).
- Language selection between English and Russian.
- Intuitive user interface for easy navigation.
- Displays a list of uploaded images and their upscaled results.

## Project Structure
```
image-upscaler-app
├── src
│   ├── main
│   │   └── main.ts
│   ├── preload.ts
│   ├── renderer
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── Upscaler.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── ImageList.tsx
│   │   ├── styles
│   │   │   └── app.css
│   │   └── locales
│   │       ├── en.json
│   │       └── ru.json
│   ├── services
│   │   ├── upscaler.ts
│   │   └── fileHandler.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/txpxz/vcupsc/edit/main/image-upscaler-app.git
   ```
2. Navigate to the project directory:
   ```
   cd image-upscaler-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Run the application:
   ```
   npm start
   ```
2. Upload an image using the provided interface.
3. Select the desired upscale quantity (2x or 4x).
4. Choose your preferred language (English or Russian).
5. View the upscaled image in the results section.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
