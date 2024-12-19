import "./Awards.css";
import {
  awardsAndAcknowledgement,
  awardsAndAcknowledgementHeader,
} from "../../utils/Constant";
import Header from "../../components/ui/Header/Header";

export default function Awards() {
  return (
    <>
      <Header
        title={awardsAndAcknowledgementHeader.title}
        description={awardsAndAcknowledgementHeader.description}
        bgColor={awardsAndAcknowledgementHeader.bgColor}
        titleColor={awardsAndAcknowledgementHeader.titleColor}
      />
      <div className="awardsContainer">
        <article>
          {awardsAndAcknowledgement.map((award, index) => {
            return (
              <section key={index}>
                <h2>{award.title}</h2>
                {award.subTitle && <h3>{award.subTitle}</h3>}
                <article>
                  {award.awards.map((event, index) => {
                    return (
                      <div key={index} className="pictureBox">
                        <strong>{event.title}</strong>
                        <div>
                          {event.pictures.map((picture, index) => {
                            return (
                              <figure key={index}>
                                <img
                                  src={picture.picture}
                                  alt={`${picture.description}`}
                                />
                                <p>{picture.description}</p>
                              </figure>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </article>
              </section>
            );
          })}
        </article>
      </div>
    </>
  );
}
