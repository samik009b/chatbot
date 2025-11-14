# Psychologist Chatbot API

A GenAI-powered backend service built using the Groq API to generate fast, context-aware psychological guidance.

---

## 🚀 Tech Stack

- **Groq API** – LLM inference engine
- **Node.js + Express** – Backend framework
- **TypeScript** – Static typing and cleaner architecture
- **MongoDB** – Store user sessions and chat history
- **JWT Authentication** – Secure API access
- **Postman** – API testing and collection sharing

---

## 🔧 Features

- **AI-driven psychological responses** using Groq LLMs
- **Context handling** for multi-turn conversations
- **Chat history persistence** for continuity
- **Modular controller & service structure**
- **Clean API endpoints** ready for frontend/mobile integration

---

## 📬 Using the Postman Collection

1. Navigate to the `postman.json` file in this project.
2. Import the file into Postman:
   - Postman → _Import_ → Select the JSON file
3. Use the predefined requests to test:
   - Authentication
   - Chat generation
   - History retrieval

---

## 📝 Notes

- Set your **Groq API key** in the environment variables before running the server.
- Install dependencies and start the development server:

```bash
npm install
npm run dev
```
