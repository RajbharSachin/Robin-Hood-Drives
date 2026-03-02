# Robin Hood Army – Volunteer Drives Finder

A modern, responsive web application that helps volunteers discover nearby food distribution drives organized by the Robin Hood Army. Built with React, Tailwind CSS, and Leaflet maps, this project mimics the official brand identity and demonstrates a clean, NGO‑focused user experience.

![Home Page Screenshot](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4cd351cb-9c92-4e4f-8a1d-31479c993e8e" />)  

## ✨ Features

- **📍 Geolocation** – Automatically detects your location (falls back to Delhi if denied or unsupported)
- **📏 Distance Filter** – Show drives within 5, 10, 25, 50, or 100 km
- **🔍 Auto‑Sort** – Drives are sorted by nearest first
- **🃏 Drive Cards** – Each card displays title, city, area, date, time, meals expected, volunteers needed, and distance
- **📄 Detailed Drive Page** – Full description, organiser info, meeting point, start/end times, and an interactive map (Leaflet)
- **📱 Fully Responsive** – Optimised for mobile, tablet, and desktop
- **🎨 Modern UI** – Glass‑morphism cards, hover effects, and smooth animations (Framer Motion)
- **🎯 NGO Branding** – Uses the official green (#2e7d32) and clean typography (Inter)

## 🧰 Tech Stack

- **React** (with Vite) – Fast development and build tooling
- **React Router** – Page navigation
- **Tailwind CSS** – Utility‑first styling
- **Framer Motion** – Animations
- **Leaflet / React Leaflet** – Interactive maps
- **Lucide React** – Consistent icon set
- **Geolocation API** – Browser location services

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRajbharSachin%2FRobin-Hood-Drives)

*(Click the button to deploy your own copy, or visit the live demo at [[https://rha-drives.vercel.app]([https://robin-hood-drives.vercel.app/](https://robin-hood-drives.vercel.app/))]*

## 📦 Local Setup

Follow these steps to run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- npm (v7 or newer) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RajbharSachin/Robin-Hood-Drives.git
   cd Robin-Hood-Drives
2. **Install dependencies**
   ```bash
   npm install
3. **Set up Tailwind CSS**
   ```bash
   npm install -D tailwindcss@3 postcss@8 autoprefixer@10
   npx tailwindcss init -p
4. **Start the development server**
   ```bash
   npm run dev
5. **Build for production**
   ```bash
   npm run build
The output will be in the dist folder.

## 🌍 Deployment on Vercel

The easiest way to deploy this app:

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite and use the correct build settings (`npm run build` and output folder `dist`).
5. Click **Deploy**.

Your app will be live at a `*.vercel.app` URL. You can also add a custom domain.

## 📝 License

This project is for demonstration purposes only. All rights to the Robin Hood Army brand and content belong to their respective owners.

## 🙏 Acknowledgements

- [Robin Hood Army](https://robinhoodarmy.com) for their inspiring mission.
- [Unsplash](https://unsplash.com) for the placeholder hero image.
- Icons by [Lucide](https://lucide.dev).

Built with ❤️ for the Robin Hood Army community.
