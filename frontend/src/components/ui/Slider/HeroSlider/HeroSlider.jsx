import PropTypes from "prop-types";
import "./HeroSlider.css";

export default function HeroSlider({ title, description, banner }) {
  return (
    <div className="heroSlideContainer ">
      <img src={banner} alt="" />
    </div>
  );
}

HeroSlider.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
