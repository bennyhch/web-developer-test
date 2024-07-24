import React from "react";
import { GalleryData } from "@/lib/useGalleryData";
import ImageCard from "./ImageCard";

const ImageCardContainer = ({ data }: { data: GalleryData[] }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((image, index) => (
        <ImageCard key={index} image={image} />
        // <div>
        //   <img src={`img/${image.filename}`} alt="" />
        // </div>
      ))}
    </div>
  );
};

export default ImageCardContainer;
