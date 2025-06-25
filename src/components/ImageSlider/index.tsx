import { useState, useEffect, MouseEvent } from "react";
import { MainImage } from "../MainImage";
import { Thumbnail } from "../Thumbnail";
import "./ImageSlider.css";

type ImageSliderProps = {
  slides: {
    url: string;
    title: string;
  }[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideChange, setSlideChange] = useState(true);

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSelectedSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleSlideChangeInterval = (
    event: MouseEvent<HTMLElement>,
    isChanged: any
  ) => {
    setSlideChange(isChanged);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (slideChange) {
      interval = setInterval(() => {
        goToNext();
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [slideChange, goToNext]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(0, -50%)",
          left: "32px",
          fontSize: "45px",
          zIndex: 1,
          color: currentIndex === 1 || currentIndex === 3 ? "#2D3849" : "#fff",
          cursor: "pointer",
        }}
        onClick={goToPrevious}>
        ❰
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          right: "32px",
          fontSize: "45px",
          color: currentIndex === 1 || currentIndex === 3 ? "#2D3849" : "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={goToNext}>
        ❱
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "32px",
          transform: "translate(0, -50%)",
          fontSize: "45px",
          color: currentIndex === 1 || currentIndex === 3 ? "#2D3849" : "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}>
        <i
          onClick={(e) => handleSlideChangeInterval(e, !slideChange)}
          className={slideChange ? "fa fa-pause" : "fa fa-play"}
          style={{
            fontSize: 24,
            color:
              currentIndex === 1 || currentIndex === 3 ? "#2D3849" : "#fff",
          }}
        />
      </div>
      <MainImage imageUrl={slides[currentIndex].url} />
      <div className="thumbnailWrapper">
        {slides.map((slide, index) => (
          <Thumbnail
            imageUrl={slide.url}
            index={index}
            currentIndex={currentIndex}
            handleSelectedSlide={handleSelectedSlide}
          />
        ))}
      </div>
    </div>
  );
};
