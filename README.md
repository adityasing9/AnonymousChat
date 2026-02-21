# 🕵️ Anonymous Chat App

A real-time anonymous chat application built with **Node.js, Express, and Socket.io**.

🌍 **Live Demo:**  
👉 https://anonymouschat-u853.onrender.com/

---

## 🚀 Features

- 💬 Real-time messaging (Socket.io)
- 🕵️ Anonymous username system
- 📱 Mobile-first WhatsApp-style UI
- 🟢 Online users counter
- ⌨️ Typing indicator
- 🎙️ Voice message support
- 📦 Installable as PWA (Add to Home Screen)
- 🔔 Browser notifications
- 🌍 Deployed on Render

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Realtime Engine:** Socket.io  
- **PWA:** Service Worker + Web Manifest  
- **Hosting:** Render  

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

## ⚙️ Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/adityasing9/AnonymousChat.git
cd AnonymousChat
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Server

```bash
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 🌍 Deployment (Render)

This project is deployed using **Render**.

### Render Settings:

| Setting | Value |
|----------|--------|
| Environment | Node |
| Build Command | npm install |
| Start Command | npm start |

Server uses dynamic port:

```js
const PORT = process.env.PORT || 3000;
```

---

## 📱 PWA Support

This app supports:

- Add to Home Screen
- Standalone app mode
- App icon support
- Offline-ready service worker
- Notification permission support

---

## 🔥 Future Improvements

- 🔐 Private 1-to-1 chat  
- 💾 Database message storage  
- 🌍 Custom domain  
- 🔔 Real background push notifications  
- 👤 Authentication system  

---

## 👨‍💻 Author

Made with ❤️ by **Aadi Sing**

GitHub: https://github.com/adityasing9

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub!
