import ResearchCard from "../../components/ui/Cards/ResearchCard/ResearchCard";
import Header from "../../components/ui/Header/Header";
import {
  researchPublication,
  researchPublicationHeader,
} from "../../utils/Constant";
import "./Research.css";

export default function Research() {
  return (
    <div className="researchPublication">
      <Header
        title={researchPublicationHeader.title}
        description={researchPublicationHeader.description}
      />
      <article>
        {researchPublication.map((research, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: index % 2 == 0 ? "white" : "#F5F5F5" }}
            >
              <ResearchCard research={research} />
            </div>
          );
        })}
      </article>
    </div>
  );
}
