# 🕵️ Anonymous Chat

<p align="center">
  <b>Real-Time Anonymous Chat Application</b><br>
  Built with Node.js, Express & Socket.io
</p>

<p align="center">
  <a href="https://anonymouschat-u853.onrender.com/">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Socket.io-RealTime-black?style=for-the-badge&logo=socket.io" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

---

## 🌍 Live Demo

👉 **https://anonymouschat-u853.onrender.com/**

---

## ✨ Features

- 💬 Real-time messaging (Socket.io)
- 🕵️ Anonymous username system
- 📱 Mobile-first WhatsApp-style UI
- 🟢 Live online user counter
- ⌨️ Typing indicator
- 🎙️ Voice message support
- 📦 Installable as PWA (Add to Home Screen)
- 🔔 Browser notification support
- 🌙 Clean modern UI

---

## 🖼 Preview

> Add screenshots here for better GitHub presentation

```
/screenshots/chat-ui.png
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Backend runtime |
| Express.js | Web server |
| Socket.io | Real-time communication |
| HTML/CSS/JS | Frontend |
| Service Worker | PWA support |
| Render | Deployment |

---

## 📂 Project Structure

```
AnonymousChat/
│
├── server.js
├── index.html
├── manifest.json
├── sw.js
├── package.json
├── package-lock.json
├── favicon.ico
├── favicon-96x96.png
├── apple-touch-icon.png
├── web-app-manifest-192x192.png
└── web-app-manifest-512x512.png
```

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/adityasing9/AnonymousChat.git
cd AnonymousChat
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 🚀 Deployment (Render)

This project is deployed on **Render**.

### Render Configuration

| Setting | Value |
|----------|--------|
| Environment | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |

### Dynamic Port Configuration

```js
const PORT = process.env.PORT || 3000;
```

---

## 📱 Progressive Web App (PWA)

Supports:

- Install on mobile & desktop
- Standalone mode
- Custom app icon
- Service worker registration
- Notification permission handling

---

## 🔒 Future Improvements

- 🔐 Private 1-to-1 chat rooms
- 💾 MongoDB message storage
- 🌍 Custom domain support
- 🔔 Background push notifications
- 👤 Authentication system
- 🛡 Moderation tools

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Aadi Sing**

- GitHub: https://github.com/adityasing9

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>
