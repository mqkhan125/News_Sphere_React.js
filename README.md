# 📰 NewsSphere

A modern, responsive news application built with **React** that delivers real-time headlines from around the world. NewsSphere focuses on performance, clean architecture, and a polished user experience using industry‑standard frontend practices.

---
<img width="940" height="492" alt="NewsSphere" src="https://github.com/user-attachments/assets/33308dc7-fada-448c-b5e3-e95b6591ec49" />

---

## 🚀 Live Overview

NewsSphere allows users to:

* Browse the latest news across multiple categories
* Search for articles with optimized, debounced input
* Experience smooth loading states during data fetching
* Read full articles via external sources

---

## ✨ Features

* 🔍 **Debounced Search** – Prevents excessive API calls while typing
* 🗂️ **Category-Based Filtering** – Business, Technology, Health, Sports, and more
* 🌐 **Global State Management** – Powered by React Context API
* ⏳ **Animated Loader** – Clear feedback during async operations
* 🖼️ **Graceful Image Handling** – Handles broken or missing image URLs
* 🔐 **Secure API Configuration** – API keys stored safely using environment variables
* 📱 **Responsive UI** – Optimized for all screen sizes

---

## 🧰 Tech Stack

* **React** (Vite)
* **Context API** – Global state management
* **Axios** – API requests
* **Tailwind CSS** + **DaisyUI** – Styling and UI components
* **NewsAPI.org** – News data provider

---

## 📂 Project Structure

```
src/
├── Components/        # Reusable UI components (Loader, Wrapper, etc.)
├── ContextApi/        # Global state (NewsContext)
├── Config/            # Axios base configuration
├── Pages/             # Main pages (News)
├── App.jsx
└── main.jsx

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```
VITE_API_KEY=your_news_api_key_here
```

---

## 🛠️ Installation & Usage

```bash
# Clone the repository
git clone https://github.com/your-username/newssphere.git

# Navigate to project directory
cd newssphere

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧠 Key Implementation Highlights

* API requests are abstracted using a centralized Axios instance
* Search input is debounced using `setTimeout` and `useEffect`
* Loading state is handled globally to ensure consistent UX
* Conditional rendering prevents UI crashes from invalid API data

---

## 📌 Future Improvements

* Skeleton loaders for article cards
* Pagination or infinite scroll
* Bookmark / save articles
* Dark/Light theme toggle
* API request cancellation with AbortController

---

## 👨‍💻 Author

**Muhammad Qasim**

Frontend Developer | React Enthusiast

---
