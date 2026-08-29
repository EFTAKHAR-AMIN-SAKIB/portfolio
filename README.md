# Personal Portfolio 

This project is a personal portfolio website designed for full-stack developers, creative engineers, and digital designers. It combines a unique neo-brutalist aesthetic with built-in administrative tools to manage content without rebuilding or editing code.

---

## Key Features

### 1. Dynamic Admin CMS (Content Management System)
- Full management for Projects, Media Studio items, Achievements, and Social Links.
- Built-in Identity & Hero Editor to update headline, role title, biography, and profile picture in real time.
- Direct Cloudflare R2 image and video uploader with live upload progress tracking.
- Passphrase manager to configure the secret access key for the Anywhere Door portal.

### 2. Four-Section Visibility System
- Toggle visibility for any major section on the website:
  - Featured Projects
  - Achievements and Honors
  - Connect and Social Channels
  - Media and Design Studio
- Hidden sections instantly disappear from public view without page reloads.

### 3. Kinetic Playground & Web Audio
- Interactive game experiments with real-time particle matrix canvas and audio synthesis built with the Web Audio API.

### 4. The Builder Realm
- A secret, immutable origin pass protected by SHA-256 cryptographic one-way hashing.
- Preserves permanent author credit and links for Md. Eftakhar Amin Sakib.

### 5. Live Visitor Counter
- Supports Standalone Mode using local browser storage or Cloud Mode using Google Firebase Firestore for global synchronization across all visitors.

---

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3 Custom Properties (Neo-Brutalist design system), Modern JavaScript (ES6+ Classes and Modules)
- **Audio & Visuals**: Web Audio API Synthesizer, HTML5 Canvas 2D Matrix
- **Cloud Integrations**: Cloudflare R2 Storage (S3-compatible), Firebase Firestore, Firebase Authentication
- **Typography & Icons**: Google Fonts (Space Grotesk, Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono), FontAwesome 6 Icons

---

## Getting Started

This project is built with vanilla web standards and requires no build tools or package installations.

### Option 1: Live Server (VS Code)
1. Open the folder in Visual Studio Code.
2. Right-click `index.html` and click **Open with Live Server**.

### Option 2: Using Node.js / NPX
```bash
# Start a local static server
npx serve . -l 5500
```
Open `http://localhost:5500` in your web browser.

---

## Deployment Guide

You can deploy this repository to any static hosting provider:

- **GitHub Pages**: Go to Repository Settings -> Pages -> Source: Deploy from a branch (`main` / root).
- **Vercel**: Import the GitHub repository and deploy with default settings.
- **Netlify**: Connect your GitHub repository or drag-and-drop the directory.
- **Cloudflare Pages**: Connect the repository with output directory set to `/`.
- **Firebase Hosting**: Run `firebase init hosting` and `firebase deploy`.

---
