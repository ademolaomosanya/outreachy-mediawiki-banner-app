const defaultValues = {
  title: "I Love Programming",
  subText:
    "The joy of creating something from nothing and solving complex problems keeps me motivated every day.",
  backgroundColor: "#0000ff",
  textColor: "#00000",
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
    <form className="form-container" aria-label="Banner Controls" role="form">
      <div className="form-group">
        <label htmlFor="bgColor" className="form-label" id="bgColor-label">
          Background Color
          <span className="sr-only">
            Choose a color for the banner background
          </span>
        </label>
        <input
          type="color"
          id="bgColor"
          onChange={handleChange("backgroundColor")}
          className="color-input"
          aria-labelledby="bgColor-label"
          aria-describedby="bgColor-desc"
        />
        <div id="bgColor-desc" className="sr-only">
          Click to open color picker and select a new background color
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title" className="form-label" id="title-label">
          Banner Title
        </label>
        <input
          type="text"
          id="title"
          onChange={handleChange("title")}
          className="form-input"
          placeholder="Enter banner title"
          aria-labelledby="title-label"
          aria-required="true"
          maxLength="100"
        />
      </div>

      <div className="form-group">
        <label htmlFor="textColor" className="form-label" id="textColor-label">
          Text Color
        </label>
        <input
          type="color"
          name="textColor"
          value={values.textColor}
          onChange={handleChange("textColor")}
          className="color-input"
          aria-labelledby="textColor-label"
          aria-describedby="textColor-desc"
        />
      </div>


      <div className="form-group">
        <label htmlFor="subText" className="form-label" id="subText-label">
          Banner Text
        </label>
        <textarea
          id="subText"
          onChange={handleChange("subText")}
          rows={3}
          className="form-input "
          placeholder="Enter banner description"
          aria-labelledby="subText-label"
          aria-describedby="subText-desc"
        />
        <div id="subText-desc" className="sr-only">
          Enter a description that will appear below the banner title
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="image" className="form-label" id="image-label">
          Upload Image
        </label>
        <div className="file-input-wrapper">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
            aria-labelledby="image-label"
            aria-describedby="image-desc"
          />
        </div>
        <div id="image-desc" className="sr-only">
          Select an image file to update the banner background
        </div>
      </div>

      <button
        onClick={handleReset}
        className="reset-button"
        aria-label="Reset all banner settings to default values"
        type="button"
      >
        Reset to Default
      </button>
    </form>
  );
};

export default BannerControls;
