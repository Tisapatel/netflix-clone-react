
# 🎬 Netflix Clone (React + TMDB + Firebase Authentication)

A modern **Netflix Clone** built using **React.js**, integrated with **TMDB API** for real-time movie data and **Firebase Authentication** for secure Login & Signup using **Email/Password and Google OAuth**.

This project demonstrates real-world authentication flow, protected routes, and a Netflix-style UI/UX.

---

## 🚀 Live Demo
🔗 https://your-live-project-link.com  
*(Replace with your deployed project link)*

---

## 📸 Screenshots


### Output
![View output](/public/screenshots/output.png)


---


---

## ✨ Features

- User Signup using Email & Password  
- User Login using Email & Password  
- Google OAuth Authentication  
- Firebase Authentication  
- Protected Routes  
- TMDB API Integration  
- Netflix-style UI  
- Responsive Design  
- Profile Page  
- Logout Functionality  

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router DOM
- CSS3

**Backend / Services**
- Firebase Authentication

**API**
- TMDB (The Movie Database API)

---

## 📦 Dependencies

```
react
react-router-dom
firebase
```

---

## 🔐 Authentication

- Email & Password Authentication
- Google OAuth (Firebase)

Firebase securely manages authentication and user sessions.

---

## 🗂️ Project Structure


```
├── 📁 public
│   ├── 🖼️ bg.png
│   ├── 🖼️ netflix_favicon.icon.png
│   └── 🖼️ vite.svg
├── 📁 react-router-dom
│   ├── 📁 app
│   │   ├── 📁 routes
│   │   │   └── 📄 home.tsx
│   │   ├── 📁 welcome
│   │   │   ├── 🖼️ logo-dark.svg
│   │   │   ├── 🖼️ logo-light.svg
│   │   │   └── 📄 welcome.tsx
│   │   ├── 🎨 app.css
│   │   ├── 📄 root.tsx
│   │   └── 📄 routes.ts
│   ├── 📁 public
│   │   └── 📄 favicon.ico
│   ├── ⚙️ .dockerignore
│   ├── ⚙️ .gitignore
│   ├── 🐳 Dockerfile
│   ├── 📝 README.md
│   ├── ⚙️ package.json
│   ├── 📄 react-router.config.ts
│   ├── ⚙️ tsconfig.json
│   └── 📄 vite.config.ts
├── 📁 src
│   ├── 📁 assets
│   │   ├── 📁 avatars
│   │   │   ├── 🖼️ cartoon1.png
│   │   │   ├── 🖼️ cartoon2.png
│   │   │   ├── 🖼️ cartoon3.png
│   │   │   └── 🖼️ cartoon4.png
│   │   ├── 📁 cards
│   │   │   ├── 📄 Cards_data.js
│   │   │   ├── 🖼️ card1.jpg
│   │   │   ├── 🖼️ card10.jpg
│   │   │   ├── 🖼️ card11.jpg
│   │   │   ├── 🖼️ card12.jpg
│   │   │   ├── 🖼️ card13.jpg
│   │   │   ├── 🖼️ card14.jpg
│   │   │   ├── 🖼️ card2.jpg
│   │   │   ├── 🖼️ card3.jpg
│   │   │   ├── 🖼️ card4.jpg
│   │   │   ├── 🖼️ card5.jpg
│   │   │   ├── 🖼️ card6.jpg
│   │   │   ├── 🖼️ card7.jpg
│   │   │   ├── 🖼️ card8.jpg
│   │   │   └── 🖼️ card9.jpg
│   │   ├── 🖼️ back_arrow_icon.png
│   │   ├── 🖼️ banner.png
│   │   ├── 🖼️ bell_icon.svg
│   │   ├── 🖼️ caret_icon.svg
│   │   ├── 🖼️ email.png
│   │   ├── 🖼️ facebook_icon.png
│   │   ├── 🖼️ google.png
│   │   ├── 🖼️ hero_banner.jpg
│   │   ├── 🖼️ hero_title.png
│   │   ├── 🖼️ info_icon.png
│   │   ├── 🖼️ instagram_icon.png
│   │   ├── 🖼️ logo.png
│   │   ├── 📄 netflix_favicon.ico
│   │   ├── 🖼️ netflix_spinner.gif
│   │   ├── 🖼️ play_icon.png
│   │   ├── 🖼️ profile_img.png
│   │   ├── 🖼️ search_icon.svg
│   │   ├── 🖼️ twitter_icon.png
│   │   └── 🖼️ youtube_icon.png
│   ├── 📁 components
│   │   ├── 📁 Footer
│   │   │   ├── 🎨 Footer.css
│   │   │   └── 📄 Footer.jsx
│   │   ├── 📁 Navbar
│   │   │   ├── 🎨 Navbar.css
│   │   │   └── 📄 Navbar.jsx
│   │   ├── 📁 TitleCards
│   │   │   ├── 🎨 TitleCards.css
│   │   │   └── 📄 TitleCards.jsx
│   │   └── 📄 ProtectedRoute.jsx
│   ├── 📁 firebase
│   │   └── 📄 config.js
│   ├── 📁 pages
│   │   ├── 📁 Home
│   │   │   ├── 🎨 Home.css
│   │   │   └── 📄 Home.jsx
│   │   ├── 📁 Login
│   │   │   ├── 🎨 Login.css
│   │   │   └── 📄 Login.jsx
│   │   ├── 📁 Player
│   │   │   ├── 🎨 Player.css
│   │   │   └── 📄 Player.jsx
│   │   └── 📁 Profile
│   │       ├── 🎨 ProfilePage.css
│   │       └── 📄 ProfilePage.jsx
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package.json
├── 📄 vite.config.js
└── 📦 yarn.lock
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Tisapatel/netflix-clone-react
cd netflix-clone
npm install
npm run dev
```

---

## 🔥 Firebase Setup

Create `src/firebase/config.js`

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAmnACEFll7nel9fmSKPo4ceqUoQwV_FE",
  authDomain: "netflix-clone-11247.firebaseapp.com",
  projectId: "netflix-clone-11247",
  storageBucket: "netflix-clone-11247.appspot.com",
  messagingSenderId: "224038493788",
  appId: "1:224038493788:web:a5da09a84e30a43fd89099"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

Enable:
- Email/Password Auth
- Google Auth

---

## 🎥 TMDB API

VITE_TMDB_TOKEN : 

```js
const VITE_TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQxMzcyMmZhZjU4YWE2OGFiMjg0MDQ2ODYxYmI5NiIsIm5iZiI6MTc1MTM1MDg1OC4wMzksInN1YiI6IjY4NjM3ZTRhNmU1ZTU5ODc4NjUyMGM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prldBWnyT1HLxSsm3m6HcR_TgRgZ8u1JFj5XqBViwFQ";
```

🔗 https://www.themoviedb.org/documentation/api

---

## 📚 Learning Outcomes

- Firebase OAuth Authentication
- React Hooks & Routing
- API Integration
- Protected Routes
- Real-world Project Structure

---

## 👩‍💻 Author

**Tisa Patel**  
Full Stack Developer 
React | Firebase | JavaScript  

---

## 📜 Disclaimer

This project is for educational purposes only.  
All movie data and images are provided by TMDB.





