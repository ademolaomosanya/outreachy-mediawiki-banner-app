const Banner = ({ backgroundColor, title, subText, bannerImage }) => {
  return (
    <header role="banner" className={`w-full ${backgroundColor} text-white p-8 relative overflow-hidden`}>
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={bannerImage}
          alt="Programming workspace setup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2">{subText}</p>
        <p className="text-sm mt-4 opacity-75">
          Photo by <a href="https://unsplash.com/@christopher__burns" className="underline">Christopher Burns</a> on <a href="https://unsplash.com" className="underline">Unsplash</a>
        </p>
      </div>
    </header>
  );
};

export default Banner; 