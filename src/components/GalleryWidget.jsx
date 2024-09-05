import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
  ]);
  const [startIndex, setStartIndex] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImageUrl]);
    }
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
  };

  // Determine if navigation buttons should be disabled
  const isPreviousDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= images.length - 3;

  return (
    <div className="bg-cardGrey rounded-custom p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center pb-10">
        <div className="rounded-[20px] bg-[#171717] px-6 py-4">
          <h2 className="text-md text-white font-poppins font-bold">
            Gallery
          </h2>
        </div>

        {/* Navigation of the sides */}
        <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-10 mt-4 md:mt-0">
          <label className="rectangle-box hover:scale-105 lg:hover:scale-110 transition-all px-4 py-2 rounded-[104px] text-white cursor-pointer">
            + ADD IMAGE
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <div className="flex space-x-2">
            <button
              className={`bg-gradient-to-br from-lightGrey to-darkGrey rectangle-box px-4 py-2 rounded-full hover:scale-110 transition duration-300 ease-in-out ${
                isPreviousDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
              disabled={isPreviousDisabled}
            >
              <span className="text-white">←</span>
            </button>

            <button
              className={`bg-gradient-to-br from-lightGrey to-darkGrey rectangle-box px-4 py-2 rounded-full hover:scale-110 transition duration-300 ease-in-out ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={isNextDisabled}
            >
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {images.slice(startIndex, startIndex + 3).map((img, index) => (
            <div
              key={index}
              className="w-1/3 aspect-square bg-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
