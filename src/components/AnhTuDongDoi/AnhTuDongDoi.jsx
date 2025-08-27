import React, { useState, useEffect } from "react";

const AnhTuDongDoi = ({
  images,
  interval = 3000,
  alt = "Slideshow",
  imgClassName,
  ...props
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img src={images[index]} alt={alt} className={imgClassName} {...props} />
  );
};

export default AnhTuDongDoi;
