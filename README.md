# Nyth Alpha - WhatsApp Bot

![Nyth Alpha](https://telegra.ph/file/e6f54418bdc9096b3f306.jpg)

**Nyth Alpha** is a feature-rich WhatsApp chatbot built using the **Baileys** library. Designed specifically for educational and group management purposes, it is tailored to boost the productivity of my class learning program, featuring automation tools, AI integration, group management, and more. 

---

## 🚀 Features

- **Group Management**: Manage groups effortlessly with commands like `stgc`, `listgc`, `gcid`, and more.
- **Hidetag Announcements**: Send announcements to groups with silent mentions.
- **Educational Tools**: Specific menus for my class, including reminder, assignment tracking and study group management.
- **AI Integration**: Leverage AI-powered tools for productivity.
- **Media Support**: Send images, videos, documents, and more with enhanced media handling.
- **Interactive Buttons & Menus**: Advanced button integration for seamless navigation.
- **Automatic Reminders**: Smart reminders for class schedules and attendance.

---

## 📸 Demo

| Feature          | Description                           | Preview                       |
|------------------|---------------------------------------|-------------------------------|
| Hidetag Announce | Silent group announcement              | ![Hidetag](https://via.placeholder.com/150) |
| Assignment Tracker| Track and manage assignments           | ![Assignments](https://via.placeholder.com/150) |
| AI Integration   | ChatGPT and AI productivity tools      | ![AI](https://via.placeholder.com/150) |

---

## 📂 Menu Overview

| Command             | Description                                     |
|---------------------|-------------------------------------------------|
| `All Menu`          | Lihat semua menu seru di sini, kak!             |
| `Menu Kelas KPI 2`  | Menampilkan Menu khusus kelas KPI 2             |
| `Menu Ai`           | Permudah kerjaan anda dengan bantuan AI         |
| `Menu Owner`        | Menampilkan Menu owner                          |
| `Menu Group`        | Intip menu khusus grup, kita seru-seruan bareng!|
| `Menu Search`       | Menampilkan Menu Search                         |
| `Menu Islami`       | Menampilkan Menu Islami                         |
| `Menu Download`     | Unduh apa yang kakak butuhin, pake tools ini!   |
| `Menu Convert`      | Tools untuk konversi format file                |
| `Menu Store`        | Menampilkan Menu Store                          |
| `Menu Other`        | Menampilkan Menu Other                          |

---

## ⚙️ Installation

### Requirements

- **Node.js** (v16 or later)
- **FFmpeg** (for media processing)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/fromrha/Nyth-Alpha-2025.git
cd Nyth Alpha
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configuration

- Go to `settings.js`, and change the credential to your liking

### 4. Start the Bot

```bash
node main.js
```

---

## ☁️ Deployment

### Heroku

1. **Create a Heroku App**:
    ```bash
    heroku create nythAlpha-bot
    ```
2. **Add Buildpacks**:
    - Node.js
    - FFmpeg

3. **Deploy to Heroku**:
    ```bash
    git add .
    git commit -m "Deploy"
    git push heroku main
    ```

### Other Platforms

- **Railway.app** - For easier CI/CD integration.
- **Vercel** - Using serverless functions.

---

### 📌 Usage

- Get started here:
    ```sh
    !menu
    ```
- Display all menus:
    ```sh
    !allmenu
    ```


## 🔐 Security & Permissions

- Only the owner can use administrative commands.
- Ensure to safeguard your **session keys** and **owner number**.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Contributing

Contributions are welcome! To contribute please read this instruction:
1. Fork this repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make changes and commit:
    ```bash
    git commit -m "Added new feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.

---

## 🧑‍🏫 Credits

- **Nyth Alpha** - The main developer and creator of this bot.
- **Baileys** - Powerful WhatsApp Web API used for this bot.
- **OpenAI** - For AI integrations.

---

## 🧑‍💻 Contact & Support

- **WhatsApp**: [Contact Creator](https://wa.me/6282114692838)
- **Portfolio**: [Fromrha](https://fromrha.framer.website/)

---

## 🌟 Support This Project

If you find this project helpful, consider supporting by:

- ⭐ Starring this repository.
- ☕ [Buy me a coffee](https://buymeacoffee.com/fromrha)
- 💵 [Paypal](https://paypal.me/haishin)
