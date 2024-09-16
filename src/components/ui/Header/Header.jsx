import "./Header.css";
import PropTypes from "prop-types";

export default function Header({ title, description }) {
  return (
    <div className="Header_container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
