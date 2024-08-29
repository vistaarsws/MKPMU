import { useRef, useEffect, useState } from "react";
import "./ComparisonSlider.css";
import comparisonVideo_before from "../../../assets/videos/before_video.gif";
import comparisonVideo_after from "../../../assets/videos/after_video.gif";

const ComparisonSlider = () => {
  const sliderRef = useRef(null);
  const sliderVideoWrapperRef = useRef(null);
  const sliderHandleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const onMouseMove = (event) => {
      if (!isDragging) return;
      const sliderLeftX = sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.clientWidth;
      const sliderHandleWidth = sliderHandleRef.current.clientWidth;
      let mouseX = event.clientX - sliderLeftX;
      if (mouseX < 0) mouseX = 0;
      else if (mouseX > sliderWidth) mouseX = sliderWidth;

      // Calculate the clipping based on slider position
      const clipWidth = (mouseX / sliderWidth) * 100;
      sliderVideoWrapperRef.current.style.clipPath = `inset(0 ${
        100 - clipWidth
      }% 0 0)`;

      sliderHandleRef.current.style.left = `calc(${clipWidth}% - ${
        sliderHandleWidth / 2
      }px)`;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <section id="Video-Comparison" className="flex justify-center">
      <div className="container">
        <div className="comparison-slider" ref={sliderRef}>
          {/* <video
            src={comparisonVideo_before}
            alt="before"
            autoPlay
            loop
            muted
          /> */}
          <img src={comparisonVideo_after} alt="" />
          <div className="video-wrapper" ref={sliderVideoWrapperRef}>
            <img src={comparisonVideo_before} alt="" />
            {/* <video
              src={comparisonVideo_after}
              alt="after"
              autoPlay
              loop
              muted
            /> */}
          </div>
          <span className="label label-before">BEFORE PROJECT</span>
          <span className="label label-after">AFTER PROJECT</span>
          <div
            className="handle"
            ref={sliderHandleRef}
            onMouseDown={onMouseDown}
          >
            <div className="handle-line"></div>
            <div className="handle-circle">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="42" cy="42" r="41" stroke="white" strokeWidth="2" />
                <path
                  d="M54 50L62 42L54 34"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 50L22 42L30 34"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="handle-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
