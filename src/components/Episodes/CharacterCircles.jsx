import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/CharacterCircles.module.css";

export default function CharacterCircles({ characters, CharacterClick }) {
  const slidesPerPage = 8;
  const totalSlides = characters.length;

  const characterGroups = [];
  for (let i = 0; i < totalSlides; i += slidesPerPage) {
    const characterGroup = characters.slice(i, i + slidesPerPage);
    characterGroups.push(characterGroup);
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className={styles.center}>
        {characterGroups.map((characterGroup, index) => (
          <SwiperSlide>
            {" "}
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
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
