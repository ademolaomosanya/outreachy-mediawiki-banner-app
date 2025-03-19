import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import BannerControls from "./components/BannerControls";

function App() {
  const [bannerStyle, setBannerStyle] = useState({
    backgroundColor: "bg-blue-600",
    title: "I love programming",
    subText: "The joy of creating something from nothing and solving complex problems keeps me motivated every day.",
    bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    isImageUploaded: false,
  });

  return (
    <div className="min-h-screen w-full">
      <Banner {...bannerStyle} />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <BannerControls onStyleChange={setBannerStyle} />
      </div>
    </div>
  );
}

export default App;
