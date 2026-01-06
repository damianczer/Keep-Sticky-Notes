<div align="center">

# Keep Sticky Notes

*Modern note-taking application with beautiful design and powerful features*

[![GitHub stars](https://img.shields.io/github/stars/damianczer/Keep-Sticky-Notes?style=for-the-badge&color=gold)](https://github.com/damianczer/Keep-Sticky-Notes/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/damianczer/Keep-Sticky-Notes?style=for-the-badge&color=blue)](https://github.com/damianczer/Keep-Sticky-Notes/watchers)
[![GitHub issues](https://img.shields.io/github/issues/damianczer/Keep-Sticky-Notes?style=for-the-badge&color=red)](https://github.com/damianczer/Keep-Sticky-Notes/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://www.damianczerwinski.pl/keep-sticky-notes/)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react) | `19.2.3` | Modern UI Framework |
| ![FontAwesome](https://img.shields.io/badge/FontAwesome-7.1.0-339AF0?style=flat-square&logo=fontawesome) | `7.1.0` | Premium Icon Library |
| ![UUID](https://img.shields.io/badge/UUID-2.0.2-orange?style=flat-square) | `2.0.2` | Unique Identifiers |
| ![PropTypes](https://img.shields.io/badge/PropTypes-15.8.1-blue?style=flat-square) | `15.8.1` | Type Validation |
| ![CSS3](https://img.shields.io/badge/CSS3-Variables-1572B6?style=flat-square&logo=css3) | `Modern` | Theming System |

Beautiful note-taking application inspired by Google Keep with masonry layout and dark mode.

<img width="1635" height="788" alt="keep-sticky-notes-light" src="https://github.com/user-attachments/assets/66f3be33-0813-4e98-84ae-168f213278e4" />

<img width="1890" height="911" alt="keep-sticky-notes-dark" src="https://github.com/user-attachments/assets/4f639860-bca7-4c3b-a8b4-6647ed936a60" />

</div>

**Key Features & Capabilities:**

- **Note Management** - Create, edit, delete, and mark notes as complete with intuitive controls
- **Color Customization** - 11 beautiful color themes for each note
- **Dark/Light Theme** - Smooth theme transitions with persistent user preferences
- **Masonry Layout** - Pinterest-style responsive grid that adapts to screen size
- **Auto-Save** - Automatic sessionStorage persistence, never lose your notes
- **Accessibility** - WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Mobile-First Design** - Optimized touch interactions for all devices

## 📁 Project Architecture

```
Keep-Sticky-Notes/
├── application/
│   ├── public/
│   │   ├── index.html              # Main HTML template with SEO meta tags
│   │   ├── manifest.json           # PWA manifest configuration
│   │   ├── robots.txt              # Search engine crawling rules
│   │   ├── sitemap.xml             # SEO sitemap for indexing
│   │   └── favicon.ico             # Application icon
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── FloatingActionButton.js  # Material Design FAB
│   │   │   ├── Footer.js           # Footer with social links
│   │   │   ├── NoteModal.js        # Modal for create/edit notes
│   │   │   ├── Task.js             # Individual note card component
│   │   │   ├── TaskWrapper.js      # Main container with state
│   │   │   └── TopBar.js           # Header with theme toggle
│   │   │
│   │   ├── constants/
│   │   │   ├── exampleNotes.js     # Default demo notes data
│   │   │   └── index.js            # App constants & enums
│   │   │
│   │   ├── hooks/
│   │   │   ├── useNotes.js         # Note management custom hook
│   │   │   └── useTheme.js         # Theme persistence hook
│   │   │
│   │   ├── styles/
│   │   │   ├── base.css            # Reset & accessibility base
│   │   │   ├── floating-action-button.css
│   │   │   ├── footer.css          # Footer layout & styles
│   │   │   ├── index.css           # Main CSS entry point
│   │   │   ├── layout.css          # Grid & responsive layout
│   │   │   ├── modal.css           # Modal animations & styles
│   │   │   ├── note-card.css       # Note card styling
│   │   │   └── variables.css       # CSS custom properties
│   │   │
│   │   ├── utils/
│   │   │   └── storage.js          # sessionStorage utilities
│   │   │
│   │   ├── App.js                  # Main application component
│   │   └── index.js                # Application entry point
│   │
│   ├── package.json                # Dependencies & scripts
│   └── .gitignore
│
├── LICENSE                         # Project license
└── README.md                       # Project documentation
```

## ⚒️ Installation & Setup

### Prerequisites

```bash
- Node.js 16.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm equivalent)
- Modern web browser (Chrome, Firefox, Safari, Edge)
```

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/damianczer/Keep-Sticky-Notes.git

# 2️⃣ Navigate to project directory
cd Keep-Sticky-Notes/application

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm start

# 🎉 Application will open at http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Production files will be in the 'build' folder
# Deploy the entire build folder to your web hosting

# Optional: Preview production build locally
npx serve -s build -l 3000
```

## 📜 License

```
Copyright © 2025 Damian Czerwiński

This project is copyrighted and proprietary software.
All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit written permission
from the copyright holder.

For licensing inquiries or permission requests:
📧 Email: kontakt@damianczerwinski.pl
🌐 Web: https://www.damianczerwinski.pl
```

<br>

<div align="center">
  
**Made with ❤️ and ☕ by Damian Czerwiński**

*Building beautiful, functional web experiences one component at a time*

</div>
