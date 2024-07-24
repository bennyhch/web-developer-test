"use client";
import { GalleryData, useGalleryData } from "@/lib/useGalleryData";
import { useState } from "react";
import ImageCardContainer from "./ImageCardContainer";

export default function Home() {
  const { data } = useGalleryData();

  const [sortedNumbers, setSortedNumbers] = useState(data);
  const [toggleOrder, setToggleOrder] = useState(false);

  const sortingHandler = () => {
    const newOrder = [...sortedNumbers].reverse();
    setSortedNumbers(newOrder);
    setToggleOrder(!toggleOrder);
  };

  return (
    <main className="flex flex-col items-center bg-pink-300 ">
      <div className="bg-pink-200 p-6 rounded-lg shadow-lg w-11/12 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Web Developer Gallery
        </h1>
        <ImageCardContainer data={sortedNumbers} />
        <button
          onClick={sortingHandler}
          className="mt-4 px-4 py-2 text-black rounded bg-white"
        >
          Sort
        </button>
      </div>
    </main>
  );
}
