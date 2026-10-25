
---

## ⚙️ How It Works

1. User clicks **Connect Sales Stack** button
2. Frontend fetches secure embed token from backend
3. Fastn Widget loads — HubSpot and Slack connect
4. Fastn Workflow runs automatically:
   - Fetches open deals from HubSpot CRM
   - Formats deal summary message
   - Posts summary to Slack #general channel

---

## 🔧 Setup & Installation

### Prerequisites
- Node.js installed
- Fastn account at [app.fastn.dev](https://app.fastn.dev)
- HubSpot account
- Slack workspace

### Steps

1. Clone the repository
```bash
git clone https://github.com/mfaizanminhas20-prog/pipelinepulse.git
cd pipelinepulse
```

2. Install dependencies
```bash
npm install express
```

3. Update `server.js` with your Fastn credentials
```javascript
const EMBED_TOKEN = "your_fastn_embed_token";
```

4. Run the server
```bash
node server.js
```

5. Open browser at `http://localhost:3000`

---

## 🔌 Fastn Integration

This project uses **[Fastn](https://fastn.dev)** as the integration backbone:

- **Fastn Widget** — Embedded in the frontend for one-click connector setup
- **Fastn Workflow** — Automates HubSpot → Slack data pipeline
- **Fastn Connectors** — HubSpot CRM and Slack pre-built connectors
- **Fastn Embed Token** — Secure token-based authentication via backend API

### Fastn Workflow
**Name:** HubSpot Deals to Slack Summary  
**Trigger:** Manual / Scheduled  
**Steps:**
1. Fetch open deals from HubSpot CRM
2. Format summary message
3. Post to Slack channel

---

## 📸 Screenshots

### PipelinePulse Dashboard
![Dashboard](screenshots/dashboard.png)

### Fastn Widget Connected
![Widget](screenshots/widget.png)

### Slack Message Received
![Slack](screenshots/slack.png)

---

## 🏆 Built For

**Fastn Online Hackathon 2024**

---

## 👨‍💻 Developer

**Muhammad Faizan**  
GitHub: [@mfaizanminhas20-prog](https://github.com/mfaizanminhas20-prog)

---

## 📄 License

MIT License
