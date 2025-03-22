# 🧠 Internal Support Bot UI

This is a simple web interface for your AI-powered support bot, built for internal use by support teams.

## 🚀 Features

- Enter a customer query
- Get a response from your AI bot (hosted on Render)
- Copy response with one click

## 🌐 How to Use

1. Edit `script.js` and replace the endpoint with your actual Render backend URL:
   ```js
   const res = await fetch("https://your-bot-url.onrender.com/chat", { ... });
