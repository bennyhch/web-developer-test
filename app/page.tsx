"use client";
import { useState } from "react";

import { useGalleryData } from "@/lib/useGalleryData";
import ImageCardContainer from "./ImageCardContainer";

export default function Home() {
  const { data } = useGalleryData();

  const [sortedNumbers, setSortedNumbers] = useState(data);
  const [isDescending, setIsDescending] = useState(false); // toggle

  const sortingHandler = () => {
    const newOrder = [...sortedNumbers].reverse();
    setSortedNumbers(newOrder);
    setIsDescending(!isDescending);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-pink min-h-screen ">
      <section
        aria-labelledyby="gallery-heading"
        className="bg-pink-200 p-6 rounded-lg shadow-lg w-11/12 lg:w-2/5 flex flex-col items-start"
      >
        <h1 id="gallery-heading" className="text-2xl mb-4">
          Web Developer Gallery
        </h1>
        <ImageCardContainer sortedNumbers={sortedNumbers} />
        <button
          aria-label={`Sort in ${
            isDescending ? "ascending" : "descending"
          } order`}
          onClick={sortingHandler}
          className="mt-4 px-6 py-1 text-black rounded-3xl bg-white flex items-center space-x-2"
        >
          <span>Sort</span>
          <img
            src={isDescending ? "img/IconUp.svg" : "img/IconDown.svg"}
            alt={isDescending ? "descending" : "ascending"}
          />
        </button>
      </section>
    </main>
  );
}
