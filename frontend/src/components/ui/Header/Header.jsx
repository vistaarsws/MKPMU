import "./Header.css";
import PropTypes from "prop-types";

export default function Header({ title, description, titleColor, bgColor }) {
  return (
    <div className="Header_container" style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: titleColor }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
