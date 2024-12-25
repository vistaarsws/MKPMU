import "./GridContentTemplate.css";
import Card from "../../Cards/Card/Card";
import Header from "../../Header/Header";
import Newsletter from "../../Cards/newsletter/Newsletter";
import rightArrow from "../../../../assets/images/Arrow right.svg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageModal from "../../ImageModal/ImageModal";

export default function GridContentTemplate(template) {
  const isNewUpdatePage =
    template.template.title.split(" ").join("") == "News&Updates";
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname, "lllllllllllllll");

  const navigate = useNavigate();
  const handleCardClick = (card) => {
    if (pathname !== "/news-updates") return null;
    if (!card.url) {
      setSelectedCard(card);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Header
        title={template.template.title}
        description={template.template.description}
        titleColor={template.template.titleColor}
        bgColor={template.template.bgColor}
      />
      <div className="gridContentTemplate_container">
        <article
          style={{
            gridTemplateColumns: isNewUpdatePage
              ? "repeat(auto-fit, minmax(300px, auto))"
              : "repeat(auto-fit, minmax(300px, 456px))",
          }}
        >
          {template.template.cards.map((card, index) => {
            return !card.url ? (
              <div
                key={index}
                onClick={() => handleCardClick(card)}
                style={{ cursor: "pointer" }}
              >
                <Card
                  card={{
                    id: card.id,
                    hasItsPage: card.hasItsPage,
                    image: { src: card.picture, borderRadius: "1.4rem" },
                    color: {
                      bgColor: card.bgColor,
                      textColor: [
                        "",
                        "var(--highest-grey)",
                        "var(--high-grey)",
                      ],
                    },
                    text: {
                      size: isNewUpdatePage
                        ? ["", "1.6rem", "1.4rem"]
                        : ["", "1.8rem", "1.6rem"],
                      content: ["", card.title, card.date],
                      justify: ["left", "left", "left"],
                    },
                  }}
                />
              </div>
            ) : (
              <Link
                key={index}
                to={card.url}
                target="_blank"
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
                      textColor: [
                        "",
                        "var(--highest-grey)",
                        "var(--high-grey)",
                      ],
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
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedCard?.picture}
          title={selectedCard?.title}
          date={selectedCard?.date}
        />
        {/* {isNewUpdatePage && (
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
        )} */}

        {/* {isNewUpdatePage && (
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
)} */}
      </div>
    </>
  );
}
