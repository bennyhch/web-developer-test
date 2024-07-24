import React from "react";
import { GalleryImage } from "@/lib/useGalleryData";
import ImageCard from "./ImageCard";

const ImageCardContainer = ({
  sortedNumbers,
}: {
  sortedNumbers: GalleryImage[];
}) => {
  return (
    <div className="flex flex-wrap justify-start gap-2 w-full">
      {sortedNumbers.map((sortedNumber, index) => (
        <ImageCard key={index} image={sortedNumber} />
      ))}
    </div>
  );
};

export default ImageCardContainer;
