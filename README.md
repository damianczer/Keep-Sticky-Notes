<div align="center">

# Keep Sticky Notes

*A modern, elegant note-taking application inspired by Google Keep*

[![GitHub stars](https://img.shields.io/github/stars/damianczer/to-do?style=for-the-badge&color=gold)](https://github.com/damianczer/to-do/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/damianczer/to-do?style=for-the-badge&color=blue)](https://github.com/damianczer/to-do/watchers)
[![GitHub issues](https://img.shields.io/github/issues/damianczer/to-do?style=for-the-badge&color=red)](https://github.com/damianczer/to-do/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://www.damianczerwinski.pl/to-do/)

</div>

## 🔍 Overview

**Keep Sticky Notes** is a sophisticated, feature-rich note-taking application that combines the simplicity of sticky notes with the power of modern web technologies. Inspired by Google Keep's elegant design philosophy, this application delivers a seamless experience for capturing, organizing, and managing your thoughts across all devices.

### ✨ Key Highlights

- **🎨 Beautiful Design** - Google Keep-inspired interface with masonry layout
- **🌓 Theme System** - Sophisticated dark/light mode with automatic color adaptation
- **🎨 11 Color Palettes** - Each note can be customized with 11 beautiful color themes
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast** - Built with React 19 and optimized performance
- **📝 Auto-Save** - Automatic sessionStorage persistence for your notes
- **♿ Accessible** - WCAG compliant with semantic HTML and ARIA labels
- **🔒 Privacy-First** - All data stored locally in your browser

## 🛠️ Technology Stack

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react) | `19.0.0` | Modern UI Framework |
| ![FontAwesome](https://img.shields.io/badge/FontAwesome-6.7.2-339AF0?style=flat-square&logo=fontawesome) | `6.7.2` | Premium Icon Library |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript) | `ES6+` | Core Language |
| ![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=flat-square&logo=css3) | `Modern` | Advanced Styling & Theming |
| ![UUID](https://img.shields.io/badge/UUID-2.0.2-orange?style=flat-square) | `2.0.2` | Unique Identifiers |

</div>

## 📱 Preview

<div align="center">

*Experience the application in action with both light and dark themes.*
  
<img width="1635" height="788" alt="image" src="https://github.com/user-attachments/assets/66f3be33-0813-4e98-84ae-168f213278e4" />

<img width="1890" height="911" alt="image" src="https://github.com/user-attachments/assets/4f639860-bca7-4c3b-a8b4-6647ed936a60" />

<img width="1901" height="918" alt="image" src="https://github.com/user-attachments/assets/ca276a73-ad39-4d59-ac55-c6148adc11d8" />

[🚀 View Live Demo](https://www.damianczerwinski.pl/keep-sticky-notes/)

</div>

## 🧑🏻‍💻 Features

<table>
<tr>
<td>

### 📝 Note Management
- ✅ **Create Notes** - Floating action button for quick note creation
- ✏️ **Edit Notes** - Click any note to edit title and content
- 🗑️ **Delete Notes** - Remove notes with confirmation
- ✔️ **Mark Complete** - Strike-through completed notes
- 🎨 **11 Color Themes** - Personalize each note with beautiful colors

</td>
<td>

### 🎯 User Experience
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent settings
- 🎨 **Masonry Layout** - Pinterest-style responsive grid
- 📱 **Mobile First** - Optimized touch interactions
- ⚡ **Instant Feedback** - Real-time UI updates
- 💾 **Auto-Save** - Never lose your notes
- 🔍 **SEO Optimized** - Professional meta tags

</td>
</tr>
<tr>
<td>

### 🎨 Design System
- **CSS Custom Properties** - Advanced theming system
- **Responsive Breakpoints** - 5 device size optimizations
- **Material Design FAB** - Floating action button
- **Smooth Animations** - Polished transitions
- **Color-Coded Notes** - Visual organization

</td>
<td>

### 🔧 Technical Excellence
- **React 19 Hooks** - Modern state management
- **Session Persistence** - Local data storage
- **Cookie-Based Themes** - Preference persistence
- **Unified Modal System** - Streamlined UX
- **Performance Optimized** - Minimal re-renders
- **Clean Architecture** - Maintainable codebase

</td>
</tr>
</table>

## 🎨 Theme System

The application features a sophisticated dual-theme system with automatic color adaptation:

### Light Mode
- Clean, bright interface optimized for daytime use
- 11 carefully selected pastel colors for notes
- High contrast for excellent readability

### Dark Mode
- Eye-comfortable design for low-light environments
- Rich, vibrant colors adapted for dark backgrounds
- Reduced eye strain during extended use

**Color Palettes:**
- 🟡 Yellow • 🔴 Red • 🟣 Purple • 🔵 Blue • 🟢 Green • 🟠 Orange
- 🩷 Pink • 🩵 Cyan • 🟤 Brown • ⚫ Gray • ⚪ White

##  ⚒️ Installation & Setup

### Prerequisites
```bash
- Node.js 16.0.0 or higher
- npm 7.0.0 or higher (or yarn equivalent)
- Modern web browser (Chrome, Firefox, Safari, Edge)
```

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/damianczer/to-do.git

# 2️⃣ Navigate to project directory
cd to-do/application

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

### Configuration

The application uses increased memory allocation for optimal development experience:

```json
{
  "scripts": {
    "start": "set NODE_OPTIONS=--max-old-space-size=4096 && react-scripts start",
    "build": "react-scripts build"
  }
}
```

## 📁 Project Architecture

```
to-do/
├── application/
│   ├── public/
│   │   └── index.html              # HTML template with SEO meta tags
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task.js             # Individual note card component
│   │   │   ├── TaskWrapper.js      # Main container with state management
│   │   │   ├── NoteModal.js        # Unified modal for add/edit
│   │   │   ├── TopBar.js           # Minimalist header
│   │   │   ├── FloatingActionButton.js  # Material Design FAB
│   │   │   └── Footer.js           # Footer with theme toggle & social links
│   │   ├── hooks/
│   │   │   └── useTheme.js         # Cookie-based theme management
│   │   ├── App.js                  # Root application component
│   │   ├── App.css                 # Complete styling with CSS custom properties
│   │   └── index.js                # Application entry point
│   ├── build/                      # Production-ready files (after npm run build)
│   │   ├── index.html              # Optimized HTML
│   │   ├── static/
│   │   │   ├── css/                # Minified CSS (3.8 kB gzipped)
│   │   │   └── js/                 # Minified JS (83.98 kB gzipped)
│   │   └── asset-manifest.json     # Asset mapping
│   └── package.json                # Dependencies and scripts
├── README.md                       # Comprehensive documentation
└── LICENSE                         # Copyright information
```

## 🔧 Available Scripts

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm start` | Development server with hot reload | Active development |
| `npm run build` | Production-optimized build | Deployment preparation |
| `npm test` | Run test suite | Quality assurance |
| `npx serve -s build -l 3000` | Preview production build | Pre-deployment testing |

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest 3 versions | ✅ Fully Supported |
| Firefox | Latest 3 versions | ✅ Fully Supported |
| Safari | Latest 2 versions | ✅ Fully Supported |
| Edge | Latest 3 versions | ✅ Fully Supported |
| Mobile Safari | iOS 12+ | ✅ Fully Supported |
| Chrome Mobile | Android 8+ | ✅ Fully Supported |

## �📜 License

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

<div align="center">

### 🤝 Contributing

This is a proprietary project, but feedback and suggestions are welcome!

**Found a bug?** [Open an issue](https://github.com/damianczer/keep-sticky-notes/issues)  
**Have an idea?** [Request a feature](https://github.com/damianczer/keep-sticky-notes/issues)  
**Like the project?** ⭐ **Star this repository!**

**Made with ❤️ and ☕ by Damian Czerwiński**

*Building beautiful, functional web experiences one component at a time*

</div>
