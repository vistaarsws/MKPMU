import downloadIcon from "../../../../assets/images/downloadIcon.svg";
import "./ResearchCard.css";
import PropTypes from "prop-types";

export default function ResearchCard({ research }) {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = research.pdf;
    link.setAttribute("download", "researchPublication_1.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="researchCard_container">
      <figure>
        <img src={research.picture} alt={`${research.title}`} />
      </figure>
      <article>
        <h3>{research.title}</h3>
        <h4>{research.subtitle}</h4>
        <p>{research.date}</p>
      </article>
      <div>
        <button>
          <img src={downloadIcon} alt="Download Icon" />
          <button onClick={downloadPdf}>Download</button>
        </button>
      </div>
    </div>
  );
}

ResearchCard.propTypes = {
  research: PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    pdf: PropTypes.string,
  }),
};
