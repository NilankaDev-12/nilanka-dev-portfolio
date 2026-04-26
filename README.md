# Nilanka Dev Portfolio

A modern, responsive developer portfolio website showcasing projects, skills, and contact information. Built with React, Vite, and Tailwind CSS for optimal performance and user experience.

**Live Demo:** [Visit Portfolio](https://NilankaDev-12.github.io/nilanka-dev-portfolio)

---

## Features

✨ **Modern Design** - Clean and professional UI with smooth animations  
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
⚡ **High Performance** - Built with Vite for lightning-fast load times  
🎨 **Tailwind CSS** - Utility-first CSS framework for beautiful styling  
📧 **Contact Form** - Integrated email functionality via EmailJS  
🔄 **Smooth Transitions** - Scroll reveal animations and page transitions  
🌙 **Dark Mode** - Eye-friendly dark theme throughout

---

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Email Service:** EmailJS
- **Deployment:** GitHub Pages
- **Code Quality:** ESLint

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NilankaDev-12/nilanka-dev-portfolio.git
   cd nilanka-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if using EmailJS)
   - Create a `.env.local` file in the root directory
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

---

## Development

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm lint
```

---

## Deployment

This project is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Builds the project
2. Deploys the contents of the `dist` folder to your GitHub Pages site

**Note:** Update the `homepage` field in `package.json` to match your GitHub Pages URL.

---

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Global styles
├── main.jsx                # React entry point
├── index.css               # Base styles
├── assets/                 # Images and static files
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── MobileMenu.jsx     # Mobile navigation
│   ├── LoadingScreen.jsx  # Splash screen
│   └── sections/
│       ├── Home.jsx       # Hero/landing section
│       ├── About.jsx      # About section
│       ├── Projects.jsx   # Projects showcase
│       ├── Contact.jsx    # Contact form section
│       └── RevealOnScroll.jsx  # Scroll animation component
```

---

## Features in Detail

### Sections

- **Home** - Hero section with introduction and call-to-action
- **About** - Personal bio and skills overview
- **Projects** - Showcase of notable projects with descriptions and links
- **Contact** - Contact form for visitor inquiries

### Interactive Elements

- Responsive navigation with mobile menu
- Smooth scroll animations
- Form validation and error handling
- Loading screen on initial page load

---

## Performance Optimization

- ⚡ Vite for fast build times and HMR (Hot Module Replacement)
- 🎯 Optimized bundle size with code splitting
- 🖼️ Lazy-loaded images and components
- 📦 Tree-shaking for unused code removal

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is open source and available under the MIT License.

---

## Contact

**Nilanka Roy**

- GitHub: [@NilankaDev-12](https://github.com/NilankaDev-12)
- Portfolio: [Visit Live](https://NilankaDev-12.github.io/nilanka-dev-portfolio)

---

**Made with ❤️ by Nilanka Roy**
