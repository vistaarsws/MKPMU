import useEmblaCarousel from "embla-carousel-react";
import "./EmblaSlider.css";
import PropTypes from "prop-types";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";

export function EmblaSlider({
  slides,
  no_of_slides,
  delay,
  autoScroll,
  navigationDots = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoScroll
      ? AutoScroll({
          play: true,
          stopOnInteraction: false,
        })
      : Autoplay({ delay: delay, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(no_of_slides);

  const slidePercentage = (1 / slidesPerView) * 100 + "%";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(no_of_slides);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [no_of_slides]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      onSelect();

      emblaApi.on("pointerUp", () => {
        if (autoScroll) {
          emblaApi.scrollNext();
        }
      });
    }
  }, [emblaApi, autoScroll]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container`}>
          {slides.map((slide, index) => {
            return (
              <div
                className="embla__slide"
                key={index}
                style={{ flexBasis: slidePercentage }}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>
      {navigationDots && (
        <div className="embla__dots">
          {Array.from({ length: emblaApi?.scrollSnapList().length || 0 }).map(
            (_, index) => (
              <button
                key={index}
                className={`embla__dot ${
                  index === selectedIndex ? "is-selected" : ""
                }`}
                type="button"
                onClick={() => scrollTo(index)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

EmblaSlider.propTypes = {
  slides: PropTypes.array,
  no_of_slides: PropTypes.number,
  delay: PropTypes.number,
  autoScroll: PropTypes.bool,
  navigationDots: PropTypes.bool,
};
