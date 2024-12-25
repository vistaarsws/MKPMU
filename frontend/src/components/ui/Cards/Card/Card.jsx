import { useNavigate } from "react-router-dom";
import "./Card.css";
import PropTypes from "prop-types";

const defaultParameter = {
  text: {
    size: ["32px", "20px", "16px"],
    content: ["", "", ""],
    justify: ["start", "start", "start"],
  },
  color: { bgColor: "white", textColor: ["#202020", "#202020", "#ccc000"] },
  image: { src: "", borderRadius: "", height: "" },
  dimensions: { maxHeight: "100%", maxWidth: "maxWidth" },
  padding: "",
};

export default function Card({ card = defaultParameter }) {
  const navigate = useNavigate();

  const {
    text = {},
    color = {},
    image = {},
    dimensions = {},
    padding = "",
  } = card;

  const textColor = color.textColor || [];
  const justify = text.justify || [];
  const content = text.content || [];

  return (
    <div
      onClick={card.hasItsPage ? () => navigate(`/blogs/${card.id}`) : null}
      className={`card_container`}
      style={{
        backgroundColor: color.bgColor,
        maxHeight: dimensions.maxHeight,
        maxWidth: dimensions.maxWidth,
        minHeight: dimensions.minHeight,
        padding: padding,
      }}
    >
      {card.image?.src && (
        <figure style={{ borderRadius: image.borderRadius }}>
          <img
            src={image.src}
            alt={`${content[1]}`}
            style={{ height: card.image.height }}
          />
        </figure>
      )}
      {card.text.content[0] !== "" && (
        <h1
          style={{
            color: textColor[0],
            textAlign: justify[0],
            fontSize: card.text.size ? card.text.size[0] : "",
          }}
        >
          {content[0]}
        </h1>
      )}
      {card.text.content[1] && (
        <h2
          style={{
            color: textColor[1],
            textAlign: justify[1],

            fontSize: card.text.size ? card.text.size[1] : "",
          }}
        >
          {content[1]}
        </h2>
      )}
      {card.text.content[2] && (
        <p
          style={{
            color: textColor[2],
            textAlign: justify[2],
            fontSize: card.text.size ? card.text.size[2] : "",
          }}
        >
          {content[2]}
        </p>
      )}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    text: PropTypes.shape({
      size: PropTypes.arrayOf(PropTypes.string),
      content: PropTypes.arrayOf(PropTypes.string),
      justify: PropTypes.arrayOf(PropTypes.string),
    }),
    color: PropTypes.shape({
      bgColor: PropTypes.string,
      textColor: PropTypes.arrayOf(PropTypes.string),
    }),
    image: PropTypes.shape({
      src: PropTypes.string,
      borderRadius: PropTypes.string,
    }),
    dimensions: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    padding: PropTypes.string,
  }),
};
