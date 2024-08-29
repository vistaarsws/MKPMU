import "./ProjectHighlightsCard.css";
import PropTypes from "prop-types";

export default function ProjectHighlightsCard({ label, value, icon, bgColor }) {
  return (
    <div className="phCard_container" style={{ backgroundColor: bgColor }}>
      <figure>
        <img src={icon} alt={`${label}`} />
      </figure>
      <strong>{value}</strong>
      <p>{label}</p>
    </div>
  );
}

ProjectHighlightsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  bgColor: PropTypes.string,
};
