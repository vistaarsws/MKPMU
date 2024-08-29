import PropTypes from "prop-types";
import "./MinisterSlider.css";

export const MinisterSlider = ({ picture, quote, fullName, date }) => {
  return (
    <div className="pmSlideContainer">
      <figure>
        <img src={picture} alt={`Picture of ${fullName}`} />
      </figure>
      <div>
        {quote.map((paragraph, index) => (
          <div key={index}>
            {paragraph.split("\n").map((line, i) => (
              <div key={i}>
                {line}
                {i < paragraph.split("\n").length - 1 && <br />}
              </div>
            ))}
          </div>
        ))}
        <div>
          <h1>{fullName}</h1>
          <time>{date}</time>
        </div>
      </div>
    </div>
  );
};

MinisterSlider.propTypes = {
  picture: PropTypes.string,
  quote: PropTypes.string,
  fullName: PropTypes.string,
  date: PropTypes.string,
};
