const defaultValues = {
  title: "I Love Programming",
  subText:
    "The joy of creating something from nothing and solving complex problems keeps me motivated every day.",
  backgroundColor: "#0000ff",
  bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
};

const BannerControls = ({ onStyleChange, values = defaultValues }) => {
  const handleChange = (field) => (e) => {
    onStyleChange({
      ...values,
      [field]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onStyleChange({
          ...values,
          bannerImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    onStyleChange(defaultValues);
  };

  return (
    <form className="form-container" aria-label="Banner Controls">
      <div className="form-group">
        <label htmlFor="bgColor" className="form-label">
          Background Color
        </label>
        <input
          type="color"
          id="bgColor"
          
          onChange={handleChange("backgroundColor")}
          className="color-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Banner Title
        </label>
        <input
          type="text"
          id="title"

          onChange={handleChange("title")}
          className="form-input"
          placeholder="Enter banner title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subText" className="form-label">
          Banner Text
        </label>
        <textarea
          id="subText"

          onChange={handleChange("subText")}
          rows={3}
          className="form-input"
          placeholder="Enter banner description"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image" className="form-label">
          Upload Image
        </label>
        <div className="file-input-wrapper">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
        </div>
      </div>

      <button onClick={handleReset} className="reset-button">
        Reset to Default
      </button>
    </form>
  );
};

export default BannerControls;
