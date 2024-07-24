import { GalleryImage } from "@/lib/useGalleryData";
import React from "react";

const ImageCard = ({ image }: { image: GalleryImage }) => {
  return (
    <div>
      <img src={`img/${image.filename}`} alt={image.altText} />
    </div>
  );
};

export default ImageCard;
