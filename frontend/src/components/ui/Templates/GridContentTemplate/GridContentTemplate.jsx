import "./GridContentTemplate.css";
import Card from "../../Cards/Card/Card";
import Header from "../../Header/Header";

export default function GridContentTemplate(template) {
  const isNewUpdatePage =
    template.template.title.split(" ").join("") == "News&Updates";
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
          );
        })}
      </article>
    </div>
  );
}
