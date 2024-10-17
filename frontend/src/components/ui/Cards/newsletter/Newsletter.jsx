import PropTypes from "prop-types";
import { newsletters } from "../../../../utils/Constant";
import Card from "../Card/Card";
import "./Newsletter.css";

function Newsletter({ no_of_cards }) {
  return (
    <>
      <article className="newsletter_box">
        {newsletters
          .slice(0, no_of_cards === "all" ? newsletters.length : no_of_cards)
          .map((newsletter, index) => (
            <div key={index}>
              <Card
                card={{
                  text: {
                    content: [
                      newsletter.title,
                      newsletter.date,
                      newsletter.description,
                    ],
                    size: ["1.8rem", "1.4rem", "1.6rem"],
                  },
                  dimensions: {},
                }}
              />
            </div>
          ))}
      </article>
    </>
  );
}

Newsletter.propTypes = {
  no_of_cards: PropTypes.number,
};

export default Newsletter;
