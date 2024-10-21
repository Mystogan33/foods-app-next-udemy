"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/images/burger.jpg";
import curryImg from "@/assets/images/curry.jpg";
import dumplingsImg from "@/assets/images/dumplings.jpg";
import macncheeseImg from "@/assets/images/macncheese.jpg";
import pizzaImg from "@/assets/images/pizza.jpg";
import schnitzelImg from "@/assets/images/schnitzel.jpg";
import tomatoSaladImg from "@/assets/images/tomato-salad.jpg";

import classes from "./image-slideshow.module.scss";

const images = [
  { src: burgerImg, alt: "A delicious, juicy burger" },
  { src: curryImg, alt: "A delicious, spicy curry" },
  { src: dumplingsImg, alt: "Steamed dumplings" },
  { src: macncheeseImg, alt: "Mac and cheese" },
  { src: pizzaImg, alt: "A delicious pizza" },
  { src: schnitzelImg, alt: "A delicious schnitzel" },
  { src: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map(({ src, alt }, index) => (
        <Image
          src={src}
          alt={alt}
          key={index}
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}
