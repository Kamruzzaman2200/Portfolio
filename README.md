# MD. Kamruzzaman's Developer Portfolio 🚀

> **Live Preview:** [https://kamruzzaman-portfolio-coral.vercel.app](https://kamruzzaman-portfolio-coral.vercel.app)

A modern, highly interactive, and fully responsive personal developer portfolio. Built with an ultra-premium **Dark Glassmorphism** design language, this portfolio leverages the latest web technologies to deliver a buttery-smooth, immersive user experience.

---

## ✨ Features

- **Dark Glassmorphism Aesthetic**: Deep space backgrounds combined with frosted glass cards (`backdrop-blur`) and luminous neon borders.
- **Ambient Auroras**: Custom CSS keyframes generate massive, slow-moving glowing orbs that float seamlessly behind the UI.
- **Scroll-Triggered Animations**: Powered by `framer-motion`, elements gracefully fade, slide, and stagger into view as you navigate the page.
- **Magnetic Hover Interactions**: Buttons, tech stack chips, and project cards feature glowing neon shadows and interactive hover states.
- **Floating macOS-style Navbar**: A sticky pill-shaped navigation dock that shrinks and blurs dynamically upon scrolling, featuring fluid active-link indicators.
- **Fully Responsive**: Carefully tuned across all viewport sizes using Tailwind's mobile-first responsive breakpoints.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
src/
├── assets/         # Images, certificates, and static files
├── components/     # Reusable UI sections
│   ├── Hero.jsx         # 3D floating profile & animated text
│   ├── About.jsx        # Glassmorphism text panels
│   ├── Skills.jsx       # Glowing tech stack grid
│   ├── Projects.jsx     # Interactive showcase cards
│   ├── Certificates.jsx # Modal-based achievement viewer
│   ├── Contact.jsx      # Dark forms with neon focus states
│   ├── Navbar.jsx       # Floating macOS dock
│   └── Footer.jsx       # Bottom navigation & links
├── index.css       # Global base styles, background colors, fonts
├── App.css         # Custom glass-card utilities & blob keyframes
├── App.jsx         # Root component assembling all sections
└── main.jsx        # React entry point
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kamruzzaman2200/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/` to view the application.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist` folder.

---

## 🎨 Design System (Glassmorphism)

This project relies on a custom CSS class added in `App.css` to achieve the frosted glass look without repeating utility strings.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  /* Custom border gradients using mask-composite */
}
```

---

## 📧 Contact

**MD. Kamruzzaman**
- **Email**: Sohel.eightb@gmail.com
- **LinkedIn**: [kamruzzaman-sohel](https://www.linkedin.com/in/kamruzzaman-sohel/)
- **GitHub**: [Kamruzzaman2200](https://github.com/Kamruzzaman2200)

---
*Built with ❤️ and React.*
