import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import BannerControls from "./components/BannerControls";

function App() {
  const initialCardProps = {
    backgroundColor: "#0000ff",
    textColor: "#00000",
    title: "I love programming",
    subText: "The joy of creating something from nothing and solving complex problems keeps me motivated every day.",
    bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    isImageUploaded: false,
  };

  const [bannerStyle, setBannerStyle] = useState(initialCardProps);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCardProps(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setCardProps(initialCardProps);
  };
  return (
    <div className="min-h-screen w-full">
      <main id="main-content">
        <Banner {...bannerStyle} />
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h2 className="sr-only">Banner Customization Controls</h2>
          <BannerControls
            onFormChange={handleFormChange}
            onReset={handleReset}
            values={bannerStyle}
            onStyleChange={setBannerStyle} />
        </div>
      </main>
    </div>
  );
}

export default App;
