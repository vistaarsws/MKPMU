import propTypes from "prop-types";
import "./TestimonialSlider.css";

export const TestimonialSlider = ({ authorQuote, authorName, authorPlace }) => {
  return (
    <div className="testimonialContainer">
      <blockquote>“{authorQuote}“</blockquote>
      <div>
        <h3 className="testimonial-name">{authorName}</h3>
        <p className="testimonial-place">{authorPlace}</p>
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  authorQuote: propTypes.string,
  authorName: propTypes.string,
  authorPlace: propTypes.string,
};
