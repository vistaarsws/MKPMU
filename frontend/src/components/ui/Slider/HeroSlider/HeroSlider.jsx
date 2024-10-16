import PropTypes from "prop-types";
import "./HeroSlider.css";

export default function HeroSlider({ title, description, banner }) {
  return (
    <div className="relative bg-green-500 w-full">
      <section
        className="heroSlideContainer bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      </section>
      <div className="banner_backDrop"></div>
    </div>
  );
}

HeroSlider.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
