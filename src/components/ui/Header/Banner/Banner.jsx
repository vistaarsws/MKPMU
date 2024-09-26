import PropTypes from "prop-types";
import "./Banner.css";

export default function Banner({ title, description, backgroundPicture }) {
  return (
    <div
      className="bannerContainer"
      style={{ backgroundImage: `url(${backgroundPicture})` }}
    >
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundPicture: PropTypes.string,
};
