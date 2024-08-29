import PropTypes from "prop-types";
import "./HeroSlider.css";

export default function HeroSlider({ title, description, banner }) {
  return (
    <>
      <section
        className="heroSlideContainer bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      </section>
    </>
  );
}

HeroSlider.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
