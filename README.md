# 🚀 StoreFleet App – Innovation Hackathon 2026 Landing Page

A modern, responsive, and visually engaging hackathon landing page built using **React**, **Tailwind CSS**, **HTML**, **CSS**, and **JavaScript**.  
This project features animated UI elements, a floating astronaut illustration, countdown timer, smooth hover effects, and fully responsive layouts optimized for all screen sizes.

---

# 🌐 Live Demo

🔗 Live Website: https://hackthon-fii2.onrender.com/

🔗 GitHub Repository: https://github.com/rwtabhii/StoreFleet-App.git

---

# ✨ Features

## 🎨 UI & Animations
- 🚀 Floating astronaut animation
- 🌌 Multi-ring concentric orbit effects
- ✨ Smooth hover transitions
- 🎯 Animated CTA buttons
- 💫 Gradient backgrounds with blur effects
- 📦 Modern glassmorphism inspired cards

---

## 📱 Fully Responsive Design
- ✅ Mobile-first layout
- ✅ Adaptive typography across devices
- ✅ Dynamic grid system
- ✅ Optimized spacing for tablets & desktops
- ✅ Overflow fixes for medium-large screens
- ✅ Flexible astronaut scaling

---

## ⏰ Interactive Components
- ⌛ Real-time countdown timer
- 🎯 Reusable CommonButton component
- 🖱 Hover animations & effects
- 🔥 Interactive cards and transitions

---

## 🧩 Sections Included
- 🚀 Hero Section
- 📖 About Hackathon
- 🌟 Why Participate
- 🤝 Mentorship & Networking
- 💼 Internship Opportunities
- 🌍 Real-world Impact
- ⏳ Countdown Timer
- 📢 CTA / Registration Section

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, JavaScript |
| Framework | React.js |
| Styling | Tailwind CSS, CSS Modules |
| Build Tool | Vite |
| Animations | CSS Keyframes & Transitions |

---

# 📁 Project Structure

```bash
HACKTHON/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── H2S.svg
│   │   ├── astronaut.svg
│   │   ├── brainImg.svg
│   │   ├── edit.svg
│   │   ├── footer.svg
│   │   ├── group.svg
│   │   ├── heroBg.svg
│   │   ├── heroIcon.svg
│   │   ├── idea.svg
│   │   ├── image1.svg
│   │   ├── image2.svg
│   │   ├── image3.svg
│   │   ├── image4.svg
│   │   ├── image5.svg
│   │   ├── mountain.svg
│   │   ├── shuttle.svg
│   │   ├── vite.svg
│   │   │
│   │   └── challengesImages/
│   │       ├── one.jpg
│   │       ├── two.jpg
│   │       ├── three.jpg
│   │       ├── four.jpg
│   │       ├── five.jpg
│   │       ├── six.jpg
│   │       ├── seven.jpg
│   │       ├── eight.jpg
│   │       ├── nine.jpg
│   │       ├── ten.jpg
│   │       ├── eleven.jpg
│   │       └── twelve.jpg
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── ChallengesItem.jsx
│   │   │   ├── CommonButton.jsx
│   │   │   └── SchedulesItem.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Challenges.jsx
│   │       ├── FAQs.jsx
│   │       ├── Hero.jsx
│   │       ├── HowToParticipate.jsx
│   │       ├── Rewards.jsx
│   │       └── Schedules.jsx
│   │
│   ├── pages/
│   │   └── HomePage.jsx
│   │
│   ├── styles/
│   │   │
│   │   ├── pages/
│   │   │   └── HomePage.module.css
│   │   │
│   │   └── sections/
│   │       ├── About.module.css
│   │       ├── Challenges.module.css
│   │       ├── FAQs.module.css
│   │       ├── HowToParticipate.module.css
│   │       ├── Rewards.module.css
│   │       └── Schedules.module.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```


---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rwtabhii/HACKTHON.git
```

## 2️⃣ Navigate to Project Directory

```bash
cd Hackthon
```
## 3️⃣ Install Dependencies

```bash
npm install
```


## 4️⃣ Start Development Server

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

# 🏗 Build for Production

```bash
npm run build
```

---

# 👀 Preview Production Build

```bash
npm run preview
```


# 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

---

# 📐 Responsive Layout Behavior

| Screen Size | Layout |
|-------------|--------|
| < 640px | Single column |
| 640px - 1023px | Two-column layout |
| 1024px - 1279px | Optimized 3-column layout |
| ≥ 1280px | Full desktop layout |

---

# 🧩 Reusable Components

## CommonButton Component

Reusable button with hover animations and gradient backgrounds.

### Props

| Prop | Type | Description |
|------|------|-------------|
| children | node | Button content |
| onClick | function | Click handler |
| bgClass | string | Tailwind gradient classes |

---

# 🚀 Future Improvements

- 🌙 Dark/Light mode toggle
- 📩 Registration API integration
- 📊 Analytics integration
- 🖼 Lazy loading for images
- 🔐 Form validation
- 🎞 More animation effects
- 📱 Mobile navigation menu

---

# 🐛 Known Issues

Currently no known issues.

Feel free to open issues or contribute improvements.

---

# 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

## Abhishek Rawat

- GitHub: https://github.com/rwtabhii
- Project Repo: https://github.com/rwtabhii/HACKTHON.git


---

# 🙏 Acknowledgements

- React.js Community
- Tailwind CSS
- Vite
- Open Source UI Inspiration
- Astronaut illustrations & design inspirations

---

# ⭐ Support

If you liked this project:

⭐ Star the repository  
🍴 Fork the project  
🛠 Contribute improvements

---

# 🚀 Made with ❤️ by Abhishek Rawat