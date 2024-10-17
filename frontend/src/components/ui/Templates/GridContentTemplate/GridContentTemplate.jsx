import "./GridContentTemplate.css";
import Card from "../../Cards/Card/Card";
import Header from "../../Header/Header";
import Newsletter from "../../Cards/newsletter/Newsletter";
import rightArrow from "../../../../assets/images/Arrow right.svg";
import { useNavigate, Link } from "react-router-dom";

export default function GridContentTemplate(template) {
  const isNewUpdatePage =
    template.template.title.split(" ").join("") == "News&Updates";

  const navigate = useNavigate();
  return (
    <div className="gridContentTemplate_container">
      <Header
        title={template.template.title}
        description={template.template.description}
      />

      <article
        style={{
          gridTemplateColumns: isNewUpdatePage
            ? "repeat(auto-fit, minmax(300px, auto))"
            : "repeat(auto-fit, minmax(300px, 456px))",
        }}
      >
        {template.template.cards.map((card, index) => {
          return (
            <Link
              key={index}
              to={card.url}
              style={{ cursor: card.url ? "pointer" : "default" }}
            >
              <Card
                key={index}
                card={{
                  id: card.id,
                  hasItsPage: card.hasItsPage,
                  image: { src: card.picture, borderRadius: "1.4rem" },
                  color: {
                    bgColor: card.bgColor,
                    textColor: ["", "var(--highest-grey)", "var(--high-grey)"],
                  },
                  text: {
                    size: isNewUpdatePage
                      ? ["", "1.6rem", "1.4rem"]
                      : ["", "1.8rem", "1.6rem"],
                    content: ["", card.title, card.date],
                    justify: ["left", "left", "left"],
                  },
                  // dimensions: { maxWidth: "74rem" },
                  // padding: "4rem",
                }}
              />
            </Link>
          );
        })}
      </article>

      {isNewUpdatePage && (
        <section className="newsletter_section">
          <div>
            <h3>News Letters</h3>
            <div onClick={() => navigate("/newsletters")}>
              <span>View More</span>
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          </div>

          <Newsletter no_of_cards={4} />
        </section>
      )}
      {isNewUpdatePage && (
        <section className="importantVisits_section">
          <div>
            <h3>Important Visits</h3>
            <div onClick={() => navigate("/newsletters")}>
              <span>See What They have to say</span>
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          </div>

          <Newsletter no_of_cards={4} />
        </section>
      )}
    </div>
  );
}
