# 🎨 AI Image Generator using Azure AI Foundry

A simple AI-powered Image Generator built with **HTML**, **CSS**, **JavaScript**, **Node.js**, **Express**, and **Azure AI Foundry**. Users can enter a text prompt, generate AI images, preview them instantly, and download the generated images.

---

## 🚀 Features

- 🖼️ Generate AI images from text prompts
- ⚡ Fast image generation using Azure AI Foundry
- 📥 Download generated images
- 🎯 Clean and responsive UI
- 🌐 REST API using Express.js
- 🔒 Environment variable support with `.env`

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- OpenAI JavaScript SDK

### AI Service
- Azure AI Foundry
- GPT Image Model (or any compatible Image Generation Model)

---

## 📁 Project Structure

```
azure-image-generator/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/azure-image-generator.git

cd azure-image-generator
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file.

Example:

```env
AZURE_OPENAI_API_KEY=YOUR_API_KEY

AZURE_OPENAI_ENDPOINT=https://YOUR_RESOURCE.services.ai.azure.com

AZURE_OPENAI_DEPLOYMENT=YOUR_DEPLOYMENT_NAME

PORT=3000
```

> **Never commit your `.env` file to GitHub.**

---

### 4. Start the server

```bash
node server.js
```

or

```bash
npm start
```

---

### 5. Open the application

Visit

```
http://localhost:3000
```

---

## 💡 How It Works

1. User enters a prompt.
2. The frontend sends the prompt to the Express backend.
3. The backend calls the Azure AI Foundry Image Generation API.
4. Azure generates an AI image.
5. The image is returned to the frontend.
6. The generated image is displayed and can be downloaded.

---

## 📸 Screenshots

### Home Page

_Add your screenshot here_

### Generated Image

_Add your generated image screenshot here_

---

## 📦 API

### Generate Image

**POST**

```
/generate
```

### Request

```json
{
  "prompt": "A futuristic city at sunset"
}
```

### Response

```json
{
  "success": true,
  "image": "Image URL or Base64 String"
}
```

---

## 📥 Download Feature

The application includes a download button allowing users to save generated AI images locally as PNG files.

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| AZURE_OPENAI_API_KEY | Azure AI Foundry API Key |
| AZURE_OPENAI_ENDPOINT | Azure AI Foundry Endpoint |
| AZURE_OPENAI_DEPLOYMENT | Deployment Name |
| PORT | Local server port |

---

## 📚 Dependencies

```json
{
  "cors": "^2.x",
  "dotenv": "^16.x",
  "express": "^4.x",
  "openai": "^5.x"
}
```

---

## 🧑‍💻 Future Improvements

- Multiple image generation
- Image history
- Dark mode
- Image size selection
- Image quality selection
- Prompt enhancement using GPT models
- Authentication
- Image gallery
- Download as JPG/PNG
- Responsive mobile UI

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Microsoft Azure AI Foundry
- OpenAI JavaScript SDK
- Node.js
- Express.js

---

⭐ If you like this project, don't forget to give it a star on GitHub!