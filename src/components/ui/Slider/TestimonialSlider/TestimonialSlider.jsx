import PropTypes from "prop-types";
import "./TestimonialSlider.css";

export const TestimonialSlider = ({
  authorQuote,
  authorName,
  authorPlace,
  cardBgColor,
  picture,
}) => {
  return (
    <>
      {picture ? (
        <figure className="actualTestimonial_container">
          <img src={picture} />
        </figure>
      ) : (
        <div
          className="testimonialContainer"
          style={{ backgroundColor: cardBgColor }}
        >
          <blockquote>“{authorQuote}“</blockquote>
          <div>
            <h3 className="testimonial-name">{authorName}</h3>
            <p className="testimonial-place">{authorPlace}</p>
          </div>
        </div>
      )}
    </>
  );
};

TestimonialSlider.propTypes = {
  authorQuote: PropTypes.string,
  authorName: PropTypes.string,
  authorPlace: PropTypes.string,
  cardBgColor: PropTypes.string,
  picture: PropTypes.string,
};
