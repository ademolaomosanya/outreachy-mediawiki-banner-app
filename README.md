# 📌 MediaWiki Banner Creation Tool

## 🚀 Project Overview
This project is a microtask for **T388234** - https://phabricator.wikimedia.org/T388248, a frontend project built with Vite + React and Vitest for testing, featuring a full-width banner with content about something I enjoy. It includes a form with a control that uses JavaScript to dynamically change the banner’s background, text, image, or other elements without reloading the page.

## 🔥 Features
- **User-friendly Interface** – Easily customize banners with a contolled inputs.
- **Live Preview** – See changes in real-time.
- **Accessibility Checks** – Ensures compliance with Web Content Accessibility Guidelines (WCAG) standards.
- **Image Upload** – Upload images from your computer for use in banners.
- **Default Image Support** – Select default images from online sources with proper attribution.
- **Background Customization** – Change the background color of the banner to fit different themes.
- **Text & Title Editing** – Modify text content and titles within the banner dynamically.


## 📖 How to Use
1. Clone the repository  
   ```bash
   git clone https://github.com/ademolaomosanya/outreachy-mediawiki-banner-app.git
   ```
2. Navigate to the project folder  
   ```bash
   cd banner-app
   ```
3. Install dependencies  
   ```bash
   npm install
   ```
4. Run the development server  
   ```bash
   npm run dev
   ```
5. Open the tool in your browser at `http://localhost:5173`


## 🛠 Tech Stack
- **Frontend**: Vite + React
- **Testing**: Vitest
- **Version Control**: Git
- **Repository Hosting**: GitHub
- **Styling**: Tailwind CSS

## 📂 Project Structure
```
/public
  vite.svg  # Static assets
/src
  /assets   # Images and other assets
  /components  # Reusable UI components
    Banner.jsx
    Banner.test.jsx
    BannerControls.jsx
    BannerControls.test.jsx
  /styles  # Global styles
  App.jsx
  App.test.jsx
  main.jsx
/tests
  setupTests.js  # Test configuration
```



## 🚀 Deployment
This project is deployed on **Vercel**.  
- **Live Demo:** [[Link to deployed version](https://outreachy-mediawiki-banner-app-six.vercel.app/)]

## 🖼 Screenshots

### Banner Customization Page
![Banner Customization](/public/Screenshot%202025-03-20%20at%2011.31.46.png)

## 🎥 Demo
![Live Preview Demo](/public/ScreenRecording2025-03-20at11.42.10-ezgif.com-video-to-gif-converter%20(1).gif)

## 📖 Task Requirement
1. **Create a Frontend project** with support for Unit Testing.
2. **Initialize Git** on the project and add the remote URL of the repository.
3. **Commit the boilerplate code** following commit message guidelines used by developers in the foundation.
4. **Push the initial commit** to the repository hosting service.
5. **Design a page** with two main elements:
   - A **full-width banner** describing something enjoyable.
   - A **form with a control** that dynamically modifies one or more aspects of the banner:
     - The background
     - The text
     - An image within the banner
     - Any other element of the banner
6. **Ensure changes are viewable without reloading the page.**
7. **Commit and push UI changes.**
8. **Document the project** thoroughly in the `README.md` file.
9. **Request feedback** from mentors if needed.
10. **Include the repository link** in the final Outreachy project application as a recorded contribution.

## 🏗 Contributing
 To contribute:
1. Fork the repo & create a new branch
2. Make your changes
3. Open a pull request

I also make sure to follow Wikimedia's commit contribution guidelines. Please refer to https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines for details.

## 📜 License
This project is licensed under the MIT License.

##  Acknowledgments
- **[Outreachy](https://www.outreachy.org/)** – Providing opportunities for open-source contributions.
- **[MediaWiki](https://www.mediawiki.org/)** – The platform for which this tool is being developed.
