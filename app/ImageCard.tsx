import React from "react";
import { GalleryImage } from "@/lib/useGalleryData";

const ImageCard = ({ image }: { image: GalleryImage }) => {
  return (
    <div>
      <img
        src={`img/${image.filename}`}
        alt={image.altText}
        className="h-20 w-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
