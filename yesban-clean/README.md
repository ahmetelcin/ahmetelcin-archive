# YesBan Discord Bot (Clean Archive Edition)

> 🧠 A retrospective Discord bot from the early coding days of **Ahmet Elçin** — cleaned, organized, and preserved as a public archive to showcase learning, evolution, and technical growth.

---

## ✨ About the Project

YesBan is a modular Discord bot developed in 2021 as part of my early journey into software development during high school.  
This project was my playground — a place to explore how bots interact with users, how databases persist information, and how modular JavaScript architecture can scale.

Over time, the project accumulated a wide variety of commands — some practical, some experimental, and many just for fun.  
Now, after reviewing and removing inappropriate or overly humorous content, I'm sharing this cleaned edition to reflect the **foundation** of how I learned to build and maintain software.

---

## 📦 Core Features

| Category     | Included Commands |
|--------------|--------------------|
| 🛡️ Moderation | `ban`, `kick`, `unban`, `slowmode`, `uyar`, `sil` |
| 👤 User Tools | `afk`, `avatar`, `kullanıcı-bilgi`, `sunucubilgi`, `davet` |
| 💰 Economy    | `çalış`, `günlük`, `market`, `envanter`, `para`, `satınal`, `sat` |
| 🎮 Fun        | `aşkölç`, `düello`, `slot`, `yazıtura` |
| ⚙️ Bot Setup  | `prefix`, `tavsiye`, `website`, `yardım` |

All commands were written in Turkish, reflecting both the target audience and the creator’s background.

---

## 🧠 What I Learned

- Designing a **modular bot architecture** using `Discord.js` and `quick.db`
- Implementing custom **command loaders and event handlers**
- Managing **stateful user data** in-memory and via database
- Handling dynamic message generation using embeds
- Organizing larger-scale Node.js projects into functional components

---

## 📁 Project Structure

```
.
├── server.js              # Main bot entry
├── komutlar/              # All modular commands
├── util/                  # Event loader and utilities
├── ayarlar.json           # Configuration file
├── LICENSE                # MIT License
└── README.md              # You're reading it!
```

---

## 👨‍💻 About the Developer

- **Name:** Ahmet Elçin  
- **GitHub:** [@ahmetelcin](https://github.com/ahmetelcin)  
- **Project Year:** Originally built in 2021, published in 2025 as an archive  
- **Country:** 🇹🇷 Turkey  
- **Goal:** Learn, build, share, and keep growing

---

## 🏛️ License

This project is licensed under the [MIT License](./LICENSE).  
You are free to use, modify, and share it — but always remember where it started. 🫡

