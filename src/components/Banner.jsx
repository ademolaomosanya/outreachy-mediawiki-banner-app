const Banner = ({ backgroundColor, title, subText, bannerImage, textColor }) => {
  const defaultImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  const isDefaultImage = !bannerImage || bannerImage === defaultImage;
  return (
    <header
      role="banner"
      className={`w-full text-white p-8 relative overflow-hidden`}
      style={{ backgroundColor: backgroundColor }}
      aria-labelledby="banner-title"
    >
      <div className="absolute inset-0 z-0 opacity-20" >
        <img
           src={bannerImage || defaultImage}
           alt={title || "Programming workspace setup"}
          className="w-full h-full object-cover"
          role="presentation"
        />
      </div>
      <div className="relative z-10">
        <h1 id="banner-title" className="text-3xl font-bold">
          {title}
        </h1>
        <p className="mt-2" style={{ color: textColor, }}>{subText}</p>
        {isDefaultImage && (
         <p className="text-sm mt-4 opacity-75">
         Photo by{" "}
         <a
           href="https://unsplash.com/@christopher__burns"
           className="underline"
           aria-label="View Christopher Burns' profile on Unsplash"
         >
           Christopher Burns
         </a>{" "}
         on{" "}
         <a
           href="https://unsplash.com"
           className="underline"
           aria-label="Visit Unsplash website"
         >
           Unsplash
         </a>
       </p>
      )}
      
      </div>
    </header>
  );
};

export default Banner;
