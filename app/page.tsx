"use client";
import { useGalleryData } from "@/lib/useGalleryData";
import { useState } from "react";
import ImageCardContainer from "./ImageCardContainer";

export default function Home() {
  const { data } = useGalleryData();

  const [sortedNumbers, setSortedNumbers] = useState(data);
  const [toggleOrder, setToggleOrder] = useState(false);

  const handleSort = () => {
    const newOrder = [...sortedNumbers].reverse();
    setSortedNumbers(newOrder);
    setToggleOrder(!toggleOrder);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Web Developer Gallery</h1>
      {/* <ImageCardContainer numbers={sortedNumbers} /> */}
      {sortedNumbers.map((image, index) => (
        <div>
          <img src={`img/${image.filename}`} alt="" />
        </div>
      ))}
      <button onClick={handleSort}>Sort</button>
    </main>
  );
}
