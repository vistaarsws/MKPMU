import "./Visitor.css";
import Header from "../../components/ui/Header/Header";
import VisitorSection from "../../components/layout/VisitorSection/VisitorSection";

export default function Visitor() {
  return (
    <>
      <Header
        title="Visitors"
        titleColor="#778E13"
        bgColor="#218F4A21"
        description="Stay informed with the latest developments, milestones, and stories from our ongoing journey. Discover how we’re making an impact and what’s next for our projects and community.​"
      />
      <div className="awardsContainer">
        <article>
          <div></div>
          <VisitorSection />
        </article>
      </div>
    </>
  );
}
