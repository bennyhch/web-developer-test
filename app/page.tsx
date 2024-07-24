"use client";
import { useState } from "react";

import { useGalleryData } from "@/lib/useGalleryData";
import ImageCardContainer from "./ImageCardContainer";

export default function Home() {
  const { data } = useGalleryData();

  const [sortedNumbers, setSortedNumbers] = useState(data);
  const [isDescending, setIsDescending] = useState(false);

  const sortingHandler = () => {
    const newOrder = [...sortedNumbers].reverse();
    setSortedNumbers(newOrder);
    setIsDescending(!isDescending);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-pink-300 min-h-screen ">
      <div className="bg-pink-200 p-6 rounded-lg shadow-lg w-11/12 lg:w-1/2">
        <h1 className="text-2xl mb-4">Web Developer Gallery</h1>
        <ImageCardContainer sortedNumbers={sortedNumbers} />
        <button
          onClick={sortingHandler}
          className="mt-4 px-4 py-2 text-black rounded bg-white"
        >
          <span>Sort</span>
          <span>
            {isDescending ? (
              <img src="img/IconUp.svg" alt="descending" />
            ) : (
              <img src="img/IconDown.svg" alt="ascending" />
            )}
          </span>
        </button>
      </div>
    </main>
  );
}
