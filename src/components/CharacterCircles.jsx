import React, { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/CharacterCircles.module.css";

export default function CharacterCircles({ characters, CharacterClick }) {
  const slidesPerPage = 8;
  const totalSlides = characters.length;

  const carouselRef = useRef();

  // Divide characters into multiple arrays, each containing 10 characters
  const characterGroups = [];
  for (let i = 0; i < totalSlides; i += slidesPerPage) {
    const characterGroup = characters.slice(i, i + slidesPerPage);
    characterGroups.push(characterGroup);
  }

  return (
    <div className={styles.center}>
      <Carousel
        ref={carouselRef}
        showArrows={false}
        showStatus={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        swipeable={true}
        emulateTouch={true}
        className={styles.container}
      >
        {characterGroups.map((characterGroup, index) => (
          <div key={index} className={styles.characterGroup}>
            {characterGroup.map((character) => (
              <div
                key={character.id}
                className={styles.character}
                onClick={() => CharacterClick(character)}
              >
                <img
                  src={character.image}
                  alt={character.id}
                  title={character.name}
                  className={styles.characterImage}
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
