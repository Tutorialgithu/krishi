import React from 'react';

const ImageGallery = () => {
  const images = [
    "https://krishisevakendra.in/cdn/shop/files/Catagory_Thumbnail_19.png?v=1705929474",
    "https://krishisevakendra.in/cdn/shop/files/Insecticides_for_all_Crops.webp?v=1712234352",
    "https://krishisevakendra.in/cdn/shop/files/Fungicides_for_all_crops.webp?v=1712234328",
    "https://krishisevakendra.in/cdn/shop/files/Herbicides_for_all_crops.webp?v=1712234310",
    "https://krishisevakendra.in/cdn/shop/files/5_d9573aaf-ae23-4f60-8226-de367a69c194.png?v=1699939516",
  ];

  return (
    <div className="w-full grid md:grid-cols-5 gap-10 p-5">
      {images.map((src, index) => (
        <div key={index} className="w-40 h-40 md:w-20 md:h-20">
          <img className="w-full h-auto" src={src} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
