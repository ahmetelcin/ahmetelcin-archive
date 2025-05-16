
# Cem Yilmaz Discord Bot (High School Archive Project)

This project is a Discord bot I developed during high school using Discord.js. It features modular command architecture, server-based settings, and a lightweight permission system. Originally hosted on Glitch and designed for learning purposes.

> 📦 This repo is preserved as an archive to document my learning process. It is not maintained and does not reflect my current coding standards.

---

## 🚀 Features

### 🛡️ Moderation Tools
- **ban / unban / kick**: Classic moderation commands
- **modlog**: Logs moderation events
- **afk**: Marks users as AFK
- **prefix**: Server-based prefix support
- **status**: Sets bot’s custom status message
- **help**: Category-based help menu

---

## 🔐 Custom Authorization System

This bot uses a custom permission system via `quick.db` rather than relying on Discord roles.

### `izin` Command (Authorization)
- `s!izin ekle @user` → Grants bot-level permission to the user
- `s!izin kaldır @user` → Removes permission

> Internally, it stores a `permission_guildID_userID` key. Only authorized users can run sensitive commands like `ban`.

---

## 📁 Command Structure

```bash
commands/
├── afk.js              # AFK system
├── ban.js              # Ban users
├── status.js           # Set bot status
├── izin.js             # Custom permission control
├── kick.js             # Kick users
├── modlog.js           # Moderation logging
├── prefix.js           # Per-guild prefix
├── unban.js            # Unban users
├── help.js             # Dynamic help command
```

---

## ⚙️ `settings.json` Explanation

```json
{
  "prefix": "s!",
  "owner": "DISCORD_ID",
  "token": "[HIDDEN]",
  "bot_name": "Cem Yilmaz",
  "color": "#e07afc",
  "settings_title": "────────────── HELP ──────────────",
  ...
}
```

- `prefix`: Command prefix
- `color`: Embed color
- `*_title`: Section headers for help embeds
- `footer`: Bottom of embed messages
- **Warning:** Never expose your bot token

---

## 📚 Learning Outcomes

- Built modular command architecture
- Used `quick.db` for persistent data
- Implemented custom permission control
- Designed a Glitch-compatible Express.js setup
- Learned how to manage bot events (ready, message, etc.)

---

## 📅 Project Timeline

- **Year:** 2023 (11th grade)
- **Hosting:** Glitch
- **Goal:** Learn bot design and architecture
- **Status:** Archived, no longer developed

---

## 👤 Developer

- **Name:** Ahmet Elçin
- **GitHub:** [@ahmetelcin](https://github.com/ahmetelcin)
- **Role:** Self-taught developer exploring Discord bot design in high school

---

## ⚠️ Disclaimers

- Built using `discord.js v12`. Not compatible with newer versions.
- Intended for archival and educational purposes only.

---

## 🏛️ License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.
